import { uuid } from 'uuidv4';
import dbConnect from '../../../lib/dbConnect';
import Profile from '../../../lib/models/Profile';

export const getProfiles = async() =>{
    await dbConnect();
    const profiles =  await Profile.find({}).lean()
    return profiles;
}


export const createProfile = async(body) => {
  await dbConnect();
    const id= uuid();
    const profile = await Profile.create({...body, id: id.toString()});
    return profile;
}

const handler =  async(req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const profiles = await getProfiles();
        res.status(200).json({ success: true, data: profiles });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const profile = await createProfile(req.body);
        res.status(201).json({ success: true, data: profile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export default handler;