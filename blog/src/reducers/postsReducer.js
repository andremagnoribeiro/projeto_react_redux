export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

//push()enserir no final
//[...colors,'blue']
//['red',...colors]

//pop()remover
//remove green
//colors.filter(color=>color!=='green')

//profile = { name: 'Sam' }
//{...profile, name: 'Alex' }
//{...profile, age: 43 }

//deletar
//delete.profile.name

//profile.name = 'Alex'

//.omiti(profile,'name')

//const profile={name:'alex'}
//profile.name='Sam'
//profile.age=54

//state.filter(elemente=> element !=="hi")
