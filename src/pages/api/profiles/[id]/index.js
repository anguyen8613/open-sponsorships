import dbConnect from '../../../../lib/dbConnect';
import Profile from '../../../../lib/models/Profile';

export const getProfile = async(id) =>{
        await dbConnect();
        const profile =  await Profile.findOne({id}).lean();
        return profile;
}

const handler =  async(req, res) => {
    const {query} = req;
    const {id} = query;
    try {
        const profile = await getProfile(id);
        res.status(200).json({ success: true, data: profile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
}

export default handler;