// chrome.runtime.onInstalled.addListener(() => {
//     chrome.storage.sync.set({ color });
//     console.log('Default background color set to %cgreen', `color: ${color}`);
// });

// document.getElementById("addPage").addEventListener('click', () => {
//     console.log("background");
//     emailFormat = document.getElementById("emailFormats").innerText
//     entireName = document.getElementById("entireName").innerText
//     domain = document.getElementById("domain").innerText
// })

// chrome.runtime.onInstalled.addListener((reason) => {
//     if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//         chrome.tabs.create({
//             url: 'table.html'
//         });
//     }
// });

// chrome.runtime.onMessage.addListener(msg => list = msg);
// console.log(list);

// chrome.runtime.onMessage.addListener(msg => {
//     list = ('msg:', JSON.parse(msg));
//     console.log(list);
//     debugger

//     function searchRoles(arr) {
//         return arr.filter(val => val.Role == "ad")

//     }
// let emailFormat = "";

// function scrape() {
//   let emailFormat = "";
//   let entireName = "";
//   let domain = "";
//   let list;
//   let rows = "";
//   let table = "";
//   let personJobs = [];
//   console.log(emailFormat);

chrome.runtime.onMessage.addListener((msg) => {
  console.log(msg);
});

//   function getName(i) {
//     try {
//       return document.querySelectorAll(
//         ".org-people-profile-card__profile-title.t-black.lt-line-clamp.lt-line-clamp--single-line.ember-view"
//       )[i].innerText;
//     } catch (error) {}
//   }

//   function getRole(i) {
//     const newRole = document.querySelectorAll(
//       ".lt-line-clamp.lt-line-clamp--multi-line.ember-view:not(.t-16):not(.t-bold)"
//     )[i].childNodes[1].data;
//     return newRole;
//   }

//   function user(userName, role) {
//     return {
//       Name: userName,
//       Role: role,
//     };
//   }

//   function getList() {
//     try {
//       for (
//         let i = 0;
//         i < document.querySelectorAll(".artdeco-entity-lockup__title").length;
//         i++
//       ) {
//         if (getName(i) == undefined) {
//           continue;
//         }
//         personJobs.push(user(getName(i), getRole(i)));
//       }
//     } catch (error) {
//       personJobs;
//     }
//     console.log(personJobs);
//     makeRows(personJobs);
//   }

//   function firstDotLast(nameArr) {
//     return `${nameArr[0]}.${nameArr[1]}`;
//   }

//   function arangeName(nameArr, format) {
//     return format([nameArr[0], nameArr[1]]);
//   }

//   function makeRows(personJobs) {
//     for (i = 0; i < personJobs.length; i++) {
//       console.log(personJobs[i]);
//       let name = personJobs[i].Name;
//       let role = personJobs[i].Role;
//       let nameArr = name.split(" ");
//       if (nameArr.length > 2) {
//         rows += `<tr>
//             <td>${name}</td>
//             <td>${role}</td>
//             <td>${arangeName(
//               [nameArr[0], nameArr[2]],
//               firstDotLast
//             )}@gmail.com</td>
//             </tr>`;
//       }
//       rows += `<tr>
//         <td>${name}</td>
//         <td>${role}</td>
//         <td>${arangeName([nameArr[0], nameArr[1]], firstDotLast)}@gmail.com</td>
//         </tr>`;
//     }
//     console.log("make rows" + rows);
//     createTable(rows);
//   }

//   function createTable(rows) {
//     table = `<table id="table">
//     <tr id="tableHeader">
//     <th>Name</th>
//     <th>Role</th>
//     <th>Email</th>
//     </tr>
//     ${rows}
//     </table>`;
//     console.log("make tables" + rows);
//     printTable(table);
//   }

// function printTable(table) {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: tableWindow(table),
//     });

//         console.log(`hi`);

//         const func = async() => {
//             console.log(`hello`);
//             let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//             chrome.scripting.executeScript({
//                 target: { tabId: tab.id },
//                 function: tableWindow,
//             });

//   function tableWindow(table) {
//     console.log(`hi`);
//     tableWindow = window.open("", "_blank");
//     tableWindow.document.body.innerHTML = table;
//   }
// }
//         }
//         func()
//         table = makeRows(list)
//         console.log(table);
//         // tableWindow = window.open("", "_blank")
//         // tableWindow.document.body.innerHTML = table
//     }
//     printTable(list)
// })

// v5
// console.log(`background`);

// chrome.runtime.onInstalled.addListener(() => {
//   getCurrentTab();
//   async function getCurrentTab() {
//     debugger;
//     let queryOptions = { active: false, currentWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//     console.log(tab);
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: scrape,
//     });
//   }
// });
