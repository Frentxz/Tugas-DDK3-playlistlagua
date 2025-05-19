let warnaClass = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5']

let lagu = [
    ['You!','Lany','2m','25k','you.jpg'],
    ['Thru These Tears','Lany','2,6m','18k','ttt.jpg'],
    ['DNA','Lany','1,4m','41k','dna.jpg'],
    ['XXL','Lany','4,8m','33k','xxl.jpg'],
    ['Mean It','Lauv & Lany','10m','85k','Meanit.jpg'],
    ];

const konten = document.getElementById("container")

    for (let a = 0; a < lagu.length; a++) {
        let judul = lagu[a][0]
        let penyanyi = lagu[a][1]
        let liked = lagu[a][2]
        let played = lagu[a][3]
        let playlist_album = lagu[a][4]

    let kelasWarna = warnaClass[a % warnaClass.length];
    
    let template=`
            <div class="lagu ${kelasWarna}">
            <h2> ${judul} </h2>
                <small>
                    <i>${penyanyi}</i>
                </small>
                <img src="${playlist_album}" alt="" srcset="">
                <div class="bawah">
                    <div class="sejajar">
                    <span class="material-symbols-outlined"> play_arrow</span>
                     ${liked}
                     </div>
                    <div><span class="material-symbols-outlined">favorite</span>
                    ${played}
                    </div>
            </div>
    `;

    konten.innerHTML += template
    }