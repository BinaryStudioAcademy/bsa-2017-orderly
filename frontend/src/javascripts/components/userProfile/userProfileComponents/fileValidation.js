let _validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];    

function Validate(oForm) {
    let arrInputs = oForm.getElementsByTagName("FileInput");
    for (let i = 0; i < arrInputs.length; i++) {
        let oInput = arrInputs[i];
        if (oInput.type == "file") {
            let sFileName = oInput.value;
            if (sFileName.length > 0) {
                let blnValid = false;
                for (let j = 0; j < _validFileExtensions.length; j++) {
                    let sCurExtension = _validFileExtensions[j];
                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                        blnValid = true;
                        break;
                    }
                }
                
                if (!blnValid) {
                    alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
                    return false;
                }
            }
        }
    }
  
    return true;
}

export default Validate