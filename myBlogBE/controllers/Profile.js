const { db, admin } = require('../admin');

class ProfileController {
  async getUserInfo(req, res) {
    try {
      const { userId } = req.params;
      const userDoc = await db.collection('user').doc(userId).get();
      
      if (!userDoc.exists) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json(userDoc.data());
    } catch (error) {
      console.error('Error getting user:', error);
      res.status(500).json({ error: 'Failed to get user' });
    }
  }

  async editUserInfo(req, res) {
    try {
      const { userId } = req.params;
      const { name, avatar, backgroundImage, birthPlace, phoneNumber, birthDate } = req.body;

      const userDoc = db.collection('user').doc(userId);

      // Check if the user making the request has the correct permissions
      const user = await admin.auth().verifyIdToken(req.headers.authorization.split('Bearer ')[1]);
      
      if (user.uid !== userId) {
        return res.status(403).json({ error: 'Unauthorized' });
      }

      await userDoc.update({
        name,
        avatarURL: avatar,
        backgroundImage,
        birthPlace,
        phoneNumber,
        birthDate,
      });

      res.status(200).json({ success: true, message: 'User updated successfully' });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Failed to update user' });
    }
  }
}

module.exports = new ProfileController();
