import fs from "node:fs";import path from "node:path";
export type Order={id:string;paymentId:string;productKey:string;email:string;status:string;createdAt:string;delivered:boolean};
const file=path.join(process.cwd(),"data","orders.json");
function init(){fs.mkdirSync(path.dirname(file),{recursive:true});if(!fs.existsSync(file))fs.writeFileSync(file,"[]")}
export function orders():Order[]{init();return JSON.parse(fs.readFileSync(file,"utf8"))}
export function save(o:Order){const a=orders().filter(x=>x.id!==o.id);a.push(o);fs.writeFileSync(file,JSON.stringify(a,null,2))}
export function byPayment(id:string){return orders().find(x=>x.paymentId===id)}
export function byId(id:string){return orders().find(x=>x.id===id)}
