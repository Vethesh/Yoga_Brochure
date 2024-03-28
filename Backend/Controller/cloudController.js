import { query } from "../configure/configure.js";
const img = "image";
const vid = "video";
const insertFileIntoDB = async (type, url) => {
  try {
    const result = await query("INSERT INTO cloud (type, url) VALUES (?, ?)", [
      type,
      url,
    ]);

    if (!result || !result.insertId) {
      throw new Error("Unable to retrieve insertId from query result.");
    }

    return result.insertId;
  } catch (error) {
    console.error("Error inserting file into database:", error);
    throw error;
  }
};


export const insertImg = async (req, res, next) => {
  console.log(req.body);
  const { imgUrl } = req.body;

  if (!imgUrl) {
    res.status(400);
    return next(new Error("imgUrl  are required"));
  }

  try {
    insertFileIntoDB(img, imgUrl);

    res.status(201).json({
      success: true,
      msg: "inserted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
};
export const insertVid = async (req, res, next) => {
  console.log(req.body);
  const { videoUrl } = req.body;

  if (!videoUrl) {
    res.status(400);
    return next(new Error("videoUrl fields are required"));
  }

  try {
    insertFileIntoDB(vid, videoUrl);

    res.status(201).json({
      success: true,
      msg: "inserted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
};
