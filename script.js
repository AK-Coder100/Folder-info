
const fileEle = document.getElementById('upload');
const sizeEle = document.getElementById('size');
const fileName = document.getElementById('name');
const lis=document.getElementById('lis');

fileEle.addEventListener('change', function (e) {
    const files = e.target.files;
    if ((files && files.length > 0 ) ){
        for (let file of files){
            if(file.name!='desktop.ini'){
                let tr =document.createElement('tr')
                tr.setAttribute('class','row-item')
                let td1=document.createElement('td')
                td1.innerHTML=`${file.name.replace(/\.[^/.]+$/, "")}`
                let td2=document.createElement('td')
                td2.innerHTML=`${formatFileSize(file.size)}`
                let td3=document.createElement('td')
                td3.innerHTML=`<button><div class="box">
                <span>${file.name.replace(/\.[^/.]+$/, "")}</span>
                <p style="display: flex;"><span>size</span>:<span>${formatFileSize(file.size)}</span></p>
                <p style="display: flex;"><span>extension</span>:<span>${file.type}</span></p>
                <p style="display: flex;"><span>date</span>:<span>${file.lastModifiedDate.getMonth()} , ${file.lastModifiedDate.getFullYear()}</span></p>
                </div>
                <svg viewBox="0 0 512 512" fill='blue'><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>  INFO</button>`
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                lis.appendChild(tr)
        }
        }
    }
});

// Convert the file size to a readable format
const formatFileSize = (bytes) =>{
    const sufixes = ['B', 'kB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
};
