const validator=require('validator')
const chalk=require('chalk')
const yargs=require ('yargs')
const notes=require('./notes')

// const msg=getNotes()
// console.log(msg)

//console.log(chalk.bold.inverse.greenBright('error'))
//console.log(validator.isEmail('nikita@gmail.com'))
//console.log(validator.isURL('https://mead.org'))

//const command=process.argv[2]

// if(command=='add'){
//     console.log('Adding note!')
// }else if(command=='remove'){
//     console.log('Removing command!')
// }

//console.log(process.argv)

//customize yargs version
yargs.version('1.1.0')

//create add comment
yargs.command({
    command:'add',
    describe:'Add new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
    body:{
        describe:'Note body',
        demandOption:true,
        type:'string'
    }
    },

    //ES6 method
    handler(argv) {
        notes.addNote(argv.title,argv.body)
        // console.log('Title:'+argv.title)
        // console.log('Body:' +argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'Remove the note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
       // console.log('Removing the note!')
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'List all the notes',
    handler(){
        notes.listNotes()
       // console.log('Listing out all the notes.')
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'Read a comment',
    builder:{
        title:{
         describe:'Note title',
        demandOption:true,
        type:'string'
        }    
    },
    handler(argv){
        notes.readNote(argv.title)
        //console.log('Reading a note')
    }
})
// console.log(yargs.argv)

yargs.parse()