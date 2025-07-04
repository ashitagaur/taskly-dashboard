
export const load = <T>(key:string):T|null=>{
  try{
    const raw=localStorage.getItem(key);
    return raw? JSON.parse(raw):null;
  }catch{return null;}
};
export const save = (key:string,data:any)=>{
  try{localStorage.setItem(key,JSON.stringify(data));}catch{}
}
