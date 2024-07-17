import { plantsModel } from "@/Model/plants-model";
import { dbConnect } from "./mongo";

export const getPlants = async () => {
  await dbConnect();
  const req = plantsModel.find().lean();
  return req;
};
