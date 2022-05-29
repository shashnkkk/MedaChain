const submit = document.querySelector("#submit");

const download_url = async ()=>{
    contract.methods.download_prep(account).call({from: account }, function (err, result) {
        if (err) {
            console.log("An error occured", err);
            return;
        }

    });
    // console.log(count);
}

submit.addEventListener("click",download_url);
