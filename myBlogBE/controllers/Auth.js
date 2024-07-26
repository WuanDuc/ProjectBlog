const { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    sendEmailVerification,
    sendPasswordResetEmail
} = require('firebase/auth'); // Ensure you're importing from Firebase

const { 
    getFirestore, 
    collection, 
    addDoc 
} = require("firebase/firestore");
const { firebase, db, auth } = require(`../config.js`);
class FirebaseAuthController {
    registerUser(req, res) {
        const { 
            email, password, name, avatar, backgroundImage, birthPlace, 
            phoneNumber, birthDate 
        } = req.body;
      
        if (!email || !password) {
            return res.status(422).json({
                email: "Email is required",
                password: "Password is required",
            });
        }
      
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const { uid } = user; //  userCredential uid
                console.log(`User ID: ${uid}`);
                
                // Sending email verification
                sendEmailVerification(user)
                    .then(async () => {
                        try {
                            const userData = {
                                name: name,
                                avatarURL: avatar || "",
                                backgroundImage: backgroundImage || "",
                                birthPlace: birthPlace || "",
                                phoneNumber: phoneNumber || "",
                                birthDate: birthDate || "",
                                listFriends: [],
                                listPosts: [],
                            };
                            // const myCollection = collection(db, "User");
                            // const docRef = await addDoc(myCollection, { ...userData, uid });
                            const userDoc = await db.collection('user').doc(user.uid).set(userData);
                            console.log("Document User successfully added!");
            
                            return res.status(201).json({
                                success: true,
                                message: "User created and email verification sent!",                                
                            });
                        } catch (error) {
                            console.error("Error adding document user: ", error);
                            return res.status(500).json({
                                success: false,
                                message: "Something went wrong when adding user",
                            });
                        }
                    })
                    .catch((error) => {
                        console.error("Error sending email verification: ", error);
                        return res.status(500).json({ error: "Error sending email verification" });
                    });
            })
            .catch((error) => {
                const errorMessage = error.message || "An error occurred while registering user";
                return res.status(500).json({ error: errorMessage });
            });
    }
    loginUser(req, res) {
        const { email, password } = req.body;
        console.log(email, password);
        if (!email || !password) {
            return res.status(422).json({
                email: "Email is required",
                password: "Password is required",
            });
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                if (!user.emailVerified) {
                    return res.status(403).json({
                        error: "Email not verified. Please check your email for verification instructions.",
                    });
                }

                user.getIdToken().then((idToken) => {
                    res.cookie('access_token', idToken, {
                        httpOnly: true
                    });
                    res.status(200).json({ message: "User logged in successfully", userCredential });
                }).catch((error) => {
                    res.status(500).json({ error: "Internal Server Error" });
                });
            })
            .catch((error) => {
                console.error(error);
                const errorMessage = error.message || "An error occurred while logging in";
                res.status(500).json({ error: errorMessage });
            });
    }
}

module.exports = new FirebaseAuthController();
