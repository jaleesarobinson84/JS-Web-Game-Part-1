function newImage(url, bottom, left ) {
    
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left
    object.style.bottom = bottom
    document.body.append(object)
     
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '200px', '450px')
newImage('assets/tree.png', '300px', '200px')
newImage('assets/pillar.png', '100px', '350px')
newImage('assets/crate.png', '200px', '150px')
newImage('assets/well.png', '425px', '500px')

function newItem(url, bottom, left){
    let sword = document.createElement('img')
    sword.src = url
    sword.position = 'fixed'
    sword.left = left
    sword.bottom = bottom
    document.body.append(sword)
    sword.addEventListener('click', function(){
        sword.remove()
    })
    
}

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '185px', '165px')
newItem('assets/staff.png', '100px', '600px')











