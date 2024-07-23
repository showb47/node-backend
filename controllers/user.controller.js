const { User } = require("../models/user.model");

// ************************ Auth ******************
// sign up api
exports.userSignup = async (req, res) => {
  const { name, password, email } = req.body;

  if (!name || !password || !email) {
    return res
      .status(400)
      .json({ status: 400, message: "All field is required.." });
  }

  // check email
  const checkEmail = await User.findOne({ email: email });
  if (checkEmail)
    return res
      .status(409)
      .json({ status: 409, message: "Email already exists" });


  const newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.password = password;
  newUser.save();

  res
    .status(200)
    .json({ status: 200, message: "User added successfully..", user: newUser });
}

// login api
exports.userLogin = async (req, res) => {
  const { password, email } = req.body;

  if (!password || !email) {
    return res
      .status(400)
      .json({ status: 400, message: "All field is required.." });
  }

  // check email
  const checkEmail = await User.findOne({ email: email });
  if (!checkEmail)
    return res.status(404).json({ status: 404, message: "Email not found" });

  if (checkEmail.password != password) {
    return res
      .status(401)
      .json({ status: 401, message: "Password is incorect" });
  }

  res.status(200).json({
    status: 200,
    message: "User login successfully..",
    user: checkEmail,
  });
};

//  api  //

// exports.userPost =  async (req, res) => {
//   const { title, description, postBy, imageUrl } = req.body;

//   if (!title || !description || !postBy || !imageUrl) {
//     return res
//       .status(400)
//       .json({ status: 400, message: "All field is required.." });
//   }
//   const post = new Blog();
//   post.description = description;
//   post.title = title;
//   post.postBy = postBy;
//   post.imageUrl = imageUrl;
//   post.save();


//   res.status(200).json({
//     status: 200,
//     message: "Post added successfully..",
//     blog: post,
//   });
// };

//  get api //


// all user api //

exports.allUser = async (req, res) => {
 
  const user = await User.find()
  if(user.length == 0){
      return res.status(404).json({ status: 404, message: "User not found!..", users:user});
  }
res.status(200).json({ status: 200, message: "Users get successfully..", users:user });
};

//  delete user api  //
exports.userDelete = async (req, res) => {
  try {
      const {id} = req.params;

      if (!id) {
        return res.json({ status: 400, message: "All field is reuired.." });
      }
      await User.deleteOne({ _id: id })
    
      res
        .status(200)
        .json({ status: 200, message: "User delete successfully.." });
  } catch (error) {
      console.log(error);
  }
};


// update or edit api of user //
exports.userUpdate = async (req, res) => {
try {
  const { name, password, id} = req.body;

  const user = await User.findById(id)
  user.name = name
  user.password = password
  user.save()

  res
    .status(200)
    .json({ status: 200, message: "user updated successfully..", user:user});

} catch (error) {
  console.log(error)
}

  
};

// single user by id 
exports.singleUserById = async(req,res) => {
  const {id} = req.params;

  const user = await findById(id)
  if(id)
    res.status(200).json({status:200,message:"User found successfully",user:user})
}