document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.getElementById("create");
    const readButton = document.getElementById("read");
    const updateButton = document.getElementById("update");
    
    createButton.addEventListener("click", async function(){
        let azon = document.getElementById("azon").value;
        let baseUrl='http://localhost/tagdijapi/index.php?tagdij/'+azon;
        const formdata= new FormData(document.getElementById("dolgozoForm")); 
        let options={
            method: "POST",
            mode: "cors",
            body: formdata
        };
        let response= await fetch(baseUrl, options);
    });
    updateButton.addEventListener("click", async function(){
        let baseUrl='http://localhost/tagdijapi/index.php?tagdij/'+azon;
        let object={
            azon: document.getElementById("azon").value,
            nev: document.getElementById("nev").value,
            szuldatum: document.getElementById("szuldatum").value,
            irszam: document.getElementById("irszam").value,
            orsz: document.getElementById("orsz").value
        };
        let body=JSON.stringify(object);
        let options={
            method: "PUT",
            mode: "cors",
            body: body
        };
        let response= await fetch(baseUrl, options);
    });
    readButton.addEventListener("click", async function(){
        let baseUrl="http://localhost/tagdijapi/index.php?tagdij";
        let options={
            method: "GET",
            mode: "cors"
        };
        let response= await fetch(baseUrl, options);
        if(response.ok){
            let data= await response.json();
            tagdijListazasa(data);
        }
        else{
            console.error("Hiba a szerver válaszában!");
        }
    });
    function tagdijListazasa(tagdijak){
        let tagdijDiv= document.getElementById("tagdijlista");
        let tablazat = tagdijFejlec();
        for(let tagdij of tagdijak){
            tablazat+= tagdijSor(tagdij);
        }
        tagdijDiv.innerHTML = tablazat+"</tbody> </table>";
    }
    function tagdijSor(tagdij){
        let sor=`<tr>
                    <td>${tagdij.azon}</td>
                    <td>${tagdij.nev}</td>
                    <td>${tagdij.szuldatum}</td>
                    <td>${tagdij.irszam}</td>
                    <td>${tagdij.orsz}</td>
                    <td>
                        <button type="button" class="btn btn-outline-success" id="select" onclick="adatBetoltes(${tagdij.azon}, '${tagdij.nev}', ${tagdij.szuldatum}, ${tagdij.irszam}, '${tagdij.orsz}')" >Kiválaszt</button>
                        <button type="button" class="btn btn-outline-danger" id="delete" onclick="adatTorles(${tagdij.azon})" ><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>`;
        return sor;
    }
    function tagdijFejlec(){
        let fejlec=`<table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Azonosító</th>
                                <th>Név</th>
                                <th>Születési dátum</th>
                                <th>Irányítószam</th>
                                <th>Ország</th>
                                <th>Művelet</th>
                            </tr>
                        </thead>
                        <tbody>`;
        return fejlec;
    }
});
function adatBetoltes(azon, nev, szuldatum, irszam, orsz){
    let baseUrl='http://localhost/tagdijapi/index.php?tagdij/'+azon;
    let options={
        method: "GET",
        mode: "cors"
    };
    let response= fetch(baseUrl, options);
    document.getElementById("azon").value=azon;
    document.getElementById("nev").value=nev;
    document.getElementById("szuldatum").value=szuldatum;
    document.getElementById("irszam").value=irszam;
    document.getElementById("orsz").value=orsz;
    response.then(function(response){
        if(response.ok){
            let data= response.json();
        }
        else{
            console.error("Hiba a szerverben!");
        }
    });
}
function adatTorles(azon){
    let baseUrl='http://localhost/tagdijapi/index.php?tagdij/'+azon;
    let options={
        method: "DELETE",
        mode: "cors"
    };
    let response= fetch(baseUrl, options);
    response.then(function(response){
        if(response.ok){
            let data= response.json();
        }
        else{
            console.error("Hiba a szerverben!");
        }
    });
}