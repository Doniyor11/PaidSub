import{a as u}from"./chunk-INW2X4BE.js";import{Ba as c,l as i,o}from"./chunk-WOTPGTLC.js";var $=(()=>{let r=class r{constructor(){this.resourceUrl=u("tariffs"),this.http=o(c)}tariff(){return this.http.get(this.resourceUrl)}create(t){return this.http.post(this.resourceUrl,t)}update(t,e){return this.http.put(`${this.resourceUrl}/${e}`,t)}detail(t){return this.http.get(`${this.resourceUrl}/${t}`)}delete(t){return this.http.delete(`${this.resourceUrl}/${t}`)}usersSelected(t){return this.http.get(`${this.resourceUrl}/${t}/usersByUrlAccessList`)}usersSelect(t){return this.http.get(`${this.resourceUrl}/${t}/usersAccessList`)}usersUpdate(t,e){return this.http.put(`${this.resourceUrl}/${t}/usersByUrlAccessList/${e}`,{})}};r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=i({token:r,factory:r.\u0275fac,providedIn:"root"});let s=r;return s})();export{$ as a};
