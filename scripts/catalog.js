import {services,config} from './data/services.js';
const grid=document.querySelector('#services'), filters=document.querySelector('#filters'), results=document.querySelector('#results');
function element(tag,text,className){const node=document.createElement(tag);if(text)node.textContent=text;if(className)node.className=className;return node;}
function contact(service){const link=element('a',config.whatsapp?'Consultar por WhatsApp':'Consultar por Instagram');link.href=config.whatsapp?`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(`Hola Mica, quiero consultar por ${service.name}.`)}`:config.instagram;return link;}
function card(service){
 const article=element('article','','card');article.id=service.id;
 const ornament=element('div','✧','ornament');ornament.setAttribute('aria-hidden','true');
 const details=element('details'), summary=element('summary','Ver más');summary.setAttribute('aria-label',`Ver más sobre ${service.name}`);details.append(summary,element('p',service.description));
 for(const [title,content] of service.sections){details.append(element('h4',title));if(Array.isArray(content)){const list=element('ul');content.forEach(item=>list.append(element('li',item)));details.append(list);}else details.append(element('p',content));}
 details.append(contact(service));article.append(ornament,element('p',service.category,'category'),element('h3',service.name),element('p',service.summary),element('p','A distancia · Devolución por WhatsApp','modality'),details);return article;
}
function render(category){const visible=category==='Todas'?services:services.filter(item=>item.category===category);grid.replaceChildren(...visible.map(card));results.textContent=`${visible.length} ${visible.length===1?'sesión para explorar':'sesiones para explorar'}`;for(const button of filters.children)button.setAttribute('aria-pressed',String(button.textContent===category));}
for(const category of ['Todas',...new Set(services.map(item=>item.category))]){const button=element('button',category);button.type='button';button.setAttribute('aria-controls','services');button.addEventListener('click',()=>render(category));filters.append(button);}
render('Todas');
