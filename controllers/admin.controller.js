const { Admin } = require("../models/admin.model");

// ************************ Auth ******************
// sign up api
exports.adminSignup = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    if (!name || !password || !email) {
      return   res
        .status(400)
        .json({ status: 400, message: "All field is required.." });
    }
 
    // check email
    const checkEmail = await Admin.findOne({ email: email });
    if (checkEmail)
      return res
        .status(409)
        .json({ status: 409, message: "Email already exists" });
  
    const newAdmin = new Admin();
    newAdmin.name = name;
    newAdmin.email = email;
    newAdmin.password = password;
    newAdmin.save();
  
    res
      .status(200)
      .json({ status: 200, message: "Admin user added successfully..", Admin: newAdmin  });
  } catch (error) {
    console.log("===============", error);
  }
}

// login api
exports.adminLogin = async (req, res) => {
  const { password, email } = req.body;

  if (!password || !email) {
    return res
      .status(400)
      .json({ status: 400, message: "All field is required.." });
  }

  // check email
  const checkEmail = await Admin.findOne({ email: email });
  if (!checkEmail)
    return res.status(404).json({ status: 404, message: "Email not found" });

  if (checkEmail.password != password) {
    return res
      .status(401)
      .json({ status: 401, message: "Password is incorect" });
  }

  res.status(200).json({
    status: 200,
    message: "Admin login successfully..",
    user: checkEmail,
  });
};
 
// all admin
exports.allAdmin = async (req, res) => {
 
  const admins = await Admin.find()
  if(admins.length == 0){
      return res.status(404).json({ status: 404, message: "Admin not found!.."});
  }
res.status(200).json({ status: 200, message: "Admins get successfully..", admins:admins });
};

//  delete admin api  //
exports.adminDelete = async (req, res) => {
  try {
      const {id} = req.params;

      if (!id) {
        return res.json({ status: 400, message: "All field is reuired.." });
      }
      await Admin.deleteOne({ _id: id })
    
      res
        .status(200)
        .json({ status: 200, message: " Admin delete successfully.." });
  } catch (error) {
      console.log(error);
  }
};


// update or edit api of admin //
exports.adminUpdate = async (req, res) => {
try {
  const { name, password, id} = req.body;

  const admin = await Admin.findById(id)
  admin.name = name
  admin.password = password
  admin.save()

  res
    .status(200)
    .json({ status: 200, message: "admin updated successfully..", admin:admin});

} catch (error) {
  console.log(error)
}

  
};

// single admin by id 
exports.singleAdminById = async(req,res) => {
  const {id} = req.params;

  const admin = await findById(id)
  if(id)
    res.status(200).json({status:200,message:"Admin found successfully",admin:admin})
}