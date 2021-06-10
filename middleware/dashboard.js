export default async function({$auth, redirect, store}) {
  let user = localStorage.getItem("token");
  if(user){
      
  } else {
      redirect ('/')
      // this.$toasted.erroe('Please Login!')
  }
}