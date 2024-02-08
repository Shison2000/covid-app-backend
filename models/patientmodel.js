const mongoose=require("mongoose")
const patientschema=new mongoose.Schema(
    {
        patientname:String,
        patientaddress:String,
        patientmobile:String,
        patientsymptoms:String,
        patientstatus:String

    }
)

module.exports=mongoose.model("patient",patientschema)