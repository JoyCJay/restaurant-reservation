const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

export const Mutation = {
//    createStudent:(root,args,context,info) => {
//       return db.students.create({collegeId:args.collegeId,
//       firstName:args.firstName,
//       lastName:args.lastName})
//    }
    addBook(parent, args: {title: string, author: string}, context, info) {
        const newBook = {...args} 
        books.push(newBook)
        console.log(books)
        return newBook
    }

}

export const Query = {
    hello: () => 'world',
    books: () => {
        return books
    }
}

// module.exports = {
//     Query,
//     Mutation
// }