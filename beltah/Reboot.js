const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"📴"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("*ᴅᴇᴍᴏɴ_ᴇᴍᴩᴇʀᴏʀ_ᴍᴅ bot is Restarting from the saver...*");

  exec("pm2 restart all");
  

  



})
