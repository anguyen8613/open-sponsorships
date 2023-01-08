import dbConnect from '../../../../lib/dbConnect';
import Profile from '../../../../lib/models/Profile';

export async function getProfile(id){
        await dbConnect();
        const profile =  await Profile.findOne({id}).lean();
        return profile;
}

export default async function handler (req, res) {
    const {query} = req;
    const {id} = query;
    try {
        const profile = await getProfile(id);
        res.status(200).json({ success: true, data: profile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
}