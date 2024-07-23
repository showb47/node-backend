const { Setting } = require('../models/setting.model')


exports.createOrUpdateSetting = async (req, res) => {
  const {
    name,
    logo,
    copyright,
    metaName,
    metaDescription,
    metaLogo,
    metaKeyword,
    id,
  } = req.body;

  try {
    let setting;
    const checkdata = await findOne();

    if (checkdata) {
      // Update existing setting
      checkdata.name = name;
      checkdata.logo = logo;
      checkdata.copyright = copyright;
      checkdata.metaName = metaName;
      checkdata.metaDescription = metaDescription;
      checkdata.metaLogo = metaLogo;
      checkdata.metaKeyword = metaKeyword;

      await checkdata.save();

      setting = checkdata
    } else {
      // Create new setting
      const createSetting = new Setting();
      createSetting.name = name;
      createSetting.logo = logo;
      createSetting.copyright = copyright;
      createSetting.metaName = metaName;
      createSetting.metaDescription = metaDescription;
      createSetting.metaLogo = metaLogo;
      createSetting.metaKeyword = metaKeyword;

      await setting.save();
    }

    res.json(setting);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.getAllSettings = async (req, res) => {
    try {
        const settings = await Setting.find();
        res.json(settings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
