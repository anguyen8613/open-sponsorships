import dbConnect from '../../../../lib/dbConnect';
import Profile from '../../../../lib/models/Profile';

export const getProfile = async(id) => {
  await dbConnect();
  const profile =  await Profile.findOne({id}).lean();
  return profile;
}

export const updateProfile = async(id, body) => {
  await dbConnect();
  const updateProfile = await Profile.updateOne({id: id}, {$set: {...body}})
  return updateProfile;
}

const handler =  async(req, res) => {
  const {method, query, body} = req;
  const {id} = query;

  switch(method){
    case 'GET':
      try {
        const profile = await getProfile(id);
        res.status(200).json({ success: true, data: profile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const profile = await updateProfile(id, body);
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