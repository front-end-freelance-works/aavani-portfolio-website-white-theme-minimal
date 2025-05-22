// import paintings from './paintings-works.json';

const portraitsWorks = [
    // {
    //     "location":"./assets/images/paintings/img-1.JPG"
    // },
    // {
    //     "location":"./assets/images/paintings/img-2.JPG"
    // }
]

const eyesWorks = []

//set images - based on the number of images and file names for Portraits
for(let i=0; i<39;i++){
    if(i===25){
        portraitsWorks.push(    {
            path : './assets/images/portraits-and-other/IMG_' + parseInt(i+1) +'.mp4',
            type:'video'
        });
    }else{
        portraitsWorks.push(    {
            path : './assets/images/portraits-and-other/IMG_' + parseInt(i+1) +'.JPG',
            type:'image'
        });
    }
}
//set images - based on the number of images and file names for eyes
for(let i=0; i<7;i++){
        eyesWorks.push(    {
            path : './assets/images/eyes/IMG_' + parseInt(i+1) +'.JPG',
            type:'image'
        });
}

const portraitsWorksTabEl = document.getElementById('portraitsWorksTab');
const eyesWorksTabEl = document.getElementById('eyesWorksTab');
// const allWorksContainerEl = document.getElementById('all-paintings-works');

let newWorkElementHTML = `
  <div class="col-lg-3 col-md-6">
    <div class="bg-gray-100 rounded-lg overflow-hidden">
      <img src="./assets/images/portraits-and-other/IMG_1.JPG" alt="Illustration 1" class="w-full h-64 object-cover">
      <div class="p-4">
        <h3 class="font-bold text-lg">Dreamscape</h3>
        <p class="text-gray-600">Watercolor & Ink, 2023</p>
      </div>
    </div>
  </div>
`;

function createWorkElement(idx){
    // create a painting work item element using the template with specific image name
    newWorkElementHTML = `
  <div class="col-lg-3 col-md-6">
    <div class="overflow-hidden">
      <img src="./assets/images/portraits-and-other/IMG_${idx+1}.JPG" alt="Illustration 1" class="w-full h-64 object-cover">
      <div class="p-4">
        <h3 class="font-bold text-lg">Dreamscape</h3>
        <p class="text-gray-600">Watercolor & Ink, 2023</p>
      </div>
    </div>
  </div>
`
}

//load all paintings
function renderWorkElement(categ){
    let worksCount = 0;
    if(categ === 'portrait'){
        worksCount = portraitsWorks.length;
    } 
    if(categ === 'eyes'){
        worksCount = eyesWorks.length;
    }
    for(let i=0;i<worksCount;i++){
        // set work item element
        createWorkElement(i);
        if(categ === 'portrait'){
            console.log('portraitWorks', portraitsWorksTabEl);   

            portraitsWorksTabEl.insertAdjacentHTML('beforeend', newWorkElementHTML);
        }else if(categ === 'eyes'){
            console.log('eyesWorks', eyesWorksTabEl);
            try{
                eyesWorksTabEl.insertAdjacentHTML('beforeend', newWorkElementHTML);

            } catch(e){
                console.log('Error inserting eyesWorks: ', e);
            }
        }else{
         console.log('No works found for this category'); 
        }
    }
}
function renderEyesWorkElement(){
    let worksCount = 0;
    worksCount = eyesWorks.length;
    for(let i=0;i<worksCount;i++){
        // set work item element
        createWorkElement(i);
        eyesWorksTabEl.insertAdjacentHTML('beforeend', newWorkElementHTML);
    }
}
renderWorkElement('portrait');
// renderEyesWorkElement();
// renderPaintings(all=true);
