import{a as h,h as e,X as H,al as R,ae as o,b5 as v,ck as V,az as W,a7 as x,a4 as p,da as l,d7 as D,b as L,aW as y,b9 as i,C as c,aY as z,ba as u,n as O,m as k,k as A,cg as F,S as P,bp as q,bq as N,br as Y,bs as j,bt as E,bu as J,bv as K,G as d,bw as Q,bx as U,by as Z,bz as ee,$ as re,a0 as _,cX as te,d5 as ae,d6 as ne,d8 as T,d9 as se}from"./index.6c713c14.js";import{b as le}from"./useTitle.23a0c09e.js";import{D as oe}from"./DeletePopover.4e962ef5.js";function B(r){const a=h(),{to:g}=L(),[b,m]=y(()=>i.post(`/admin/storage/delete?id=${r.storage.id}`)),[S,n]=y(()=>i.post(`/admin/storage/${r.storage.disabled?"enable":"disable"}?id=${r.storage.id}`));return[e(c,{onClick:()=>{g(`/@manage/storages/edit/${r.storage.id}`)},get children(){return a("global.edit")}}),e(c,{get loading(){return S()},get colorScheme(){return r.storage.disabled?"success":"warning"},onClick:async()=>{const s=await n();z(s,()=>{r.refresh()})},get children(){return a(`global.${r.storage.disabled?"enable":"disable"}`)}}),e(oe,{get name(){return r.storage.mount_path},get loading(){return b()},onClick:async()=>{const s=await m();u(s,()=>{O.success(a("global.delete_success")),r.refresh()})}})]}function ie(r){const a=h();return e(p,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return H("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${R()}`}},get children(){return[e(o,{spacing:"$2",get children(){return[e(v,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return r.storage.mount_path}}),e(V,{colorScheme:"info",get children(){return a(`drivers.drivers.${r.storage.driver}`)}})]}}),e(o,{get children(){return[e(v,{get children(){return[W(()=>a("storages.common.status")),":\xA0"]}}),e(x,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return r.storage.status}})]}}),e(v,{css:{wordBreak:"break-all"},get children(){return r.storage.remark}}),e(o,{spacing:"$2",get children(){return e(B,r)}})]}})}function ce(r){const a=h();return e(D,{get children(){return[e(l,{get children(){return r.storage.mount_path}}),e(l,{get children(){return a(`drivers.drivers.${r.storage.driver}`)}}),e(l,{get children(){return r.storage.order}}),e(l,{get children(){return r.storage.status}}),e(l,{get children(){return r.storage.remark}}),e(l,{get children(){return e(o,{spacing:"$2",get children(){return e(B,r)}})}})]}})}const be=()=>{const r=h();le("manage.sidemenu.storages");const{to:a}=L(),[g,b]=y(()=>i.get("/admin/storage/list")),[m,S]=k([]),n=async()=>{const t=await b();u(t,w=>S(w.content))},[s,M]=k([]),[$,I]=k([]);(async()=>{const t=await i.get("/admin/driver/names");u(t,w=>M(w))})(),n();const X=async()=>{const t=await i.post("/admin/storage/load_all");u(t,()=>{O.success(r("storages.other.start_load_success"))})},C=A(()=>m().filter(t=>$().length===0?!0:$().includes(t.driver))),[f,G]=F("storages-layout","grid");return e(p,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[e(c,{colorScheme:"accent",get loading(){return g()},onClick:n,get children(){return r("global.refresh")}}),e(c,{onClick:()=>{a("/@manage/storages/add")},get children(){return r("global.add")}}),e(c,{colorScheme:"warning",get loading(){return g()},onClick:X,get children(){return r("storages.other.load_all")}}),e(P,{get when(){return s().length>0},get children(){return e(q,{multiple:!0,get value(){return $()},onChange:I,get children(){return[e(N,{get children(){return[e(Y,{get children(){return r("storages.other.filter_by_driver")}}),e(j,{}),e(E,{})]}}),e(J,{get children(){return e(K,{get children(){return e(d,{get each(){return s()},children:t=>e(Q,{value:t,get children(){return[e(U,{get children(){return r(`drivers.drivers.${t}`)}}),e(Z,{})]}})})}})}})]}})}}),e(ee,{get checked(){return f()==="table"},onChange:t=>{G(t.currentTarget.checked?"table":"grid")},get children(){return r("storages.other.table_layout")}})]}}),e(re,{get children(){return[e(_,{get when(){return f()==="grid"},get children(){return e(te,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(d,{get each(){return C()},children:t=>e(ie,{storage:t,refresh:n})})}})}}),e(_,{get when(){return f()==="table"},get children(){return e(x,{w:"$full",overflowX:"auto",get children(){return e(ae,{highlightOnHover:!0,dense:!0,get children(){return[e(ne,{get children(){return e(D,{get children(){return[e(d,{each:["mount_path","driver","order","status","remark"],children:t=>e(T,{get children(){return r(`storages.common.${t}`)}})}),e(T,{get children(){return r("global.operations")}})]}})}}),e(se,{get children(){return e(d,{get each(){return C()},children:t=>e(ce,{storage:t,refresh:n})})}})]}})}})}})]}})]}})};export{be as default};
