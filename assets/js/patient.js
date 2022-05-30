const submit = document.querySelector("#submit");
const load = document.querySelector("#load");


const download_url = ()=>{
    contract.methods.download_prep(account).call({from: account }, function (err, result) {
        if (err) {
            console.log("An error occured", err);
            return;
        }
        console.log("Checking");
    });
}

const load_img = ()=>{
    contract.methods.urls_return().call({from: account }, function (err, result) {
        if (err) {
            console.log("An error occured", err);
            return;
        }
        console.log("loading");
        console.log(result);
    });
}
submit.addEventListener("click",download_url);
load.addEventListener("click",load_img);