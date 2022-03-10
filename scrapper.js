// let objArr = []
// let table = document.querySelectorAll(".anon")

// function tableToArray(checkbox, ipPort, anonymityType, checked, country, city, isp) {
//     return {
//         "checkedBox": checkbox,
//         "iP:port": ipPort,
//         "anonymityType": anonymityType,
//         "checked": checked,
//         "country": country,
//         "city": city,
//         "isp": isp
//     }
// }

// for (i = 0; i < table.length; i++) {
//     objArr.push(tableToArray(table[i].childNodes[0].firstElementChild.childNodes[0].attributes[0].ownerElement.checked,
//         table[i].cells[0].innerText,
//         table[i].cells[1].innerText,
//         table[i].cells[2].innerText,
//         table[i].cells[3].innerText,
//         table[i].cells[4].innerText,
//         table[i].cells[5].innerText
//     ))
// }

// let countryS = objArr.filter(obj => obj.country[0] == "S")
// objArr
// countryS

// v1

let emailFormat = "";

function linkedinScrapper() {
  let personJobs = [];
  let rows = "";
  let table = "";
  getList();

  function getName(i) {
    try {
      return document.querySelectorAll(
        ".org-people-profile-card__profile-title.t-black.lt-line-clamp.lt-line-clamp--single-line.ember-view"
      )[i].innerText;
    } catch (error) {}
  }

  function getRole(i) {
    const newRole = document.querySelectorAll(
      ".lt-line-clamp.lt-line-clamp--multi-line.ember-view:not(.t-16):not(.t-bold)"
    )[i].childNodes[1].data;
    return newRole;
  }

  function user(userName, role) {
    return {
      Name: userName,
      Role: role,
    };
  }

  function getList() {
    try {
      for (
        let i = 0;
        i < document.querySelectorAll(".artdeco-entity-lockup__title").length;
        i++
      ) {
        if (getName(i) == undefined) {
          continue;
        }
        personJobs.push(user(getName(i), getRole(i)));
      }
    } catch (error) {
      personJobs;
    }
    console.log(personJobs);
    makeRows(personJobs);
  }

  function searchRoles(arr) {
    return arr.filter((val) => val.Role == "ad");
  }

  function firstDotLast(nameArr) {
    return `${nameArr[0]}.${nameArr[1]}`;
  }

  function arangeName(nameArr, format) {
    return format([nameArr[0], nameArr[1]]);
  }

  function makeRows(personJobs) {
    for (i = 0; i < personJobs.length; i++) {
      let name = personJobs[i].Name;
      let role = personJobs[i].Role;
      let nameArr = name.split(" ");
      if (nameArr.length > 2) {
        rows += `<tr>
                    <td>${name}</td>
                    <td>${role}</td>
                    <td>${arangeName(
                      [nameArr[0], nameArr[2]],
                      firstDotLast
                    )}@gmail.com</td>
                </tr>`;
      }
      rows += `<tr>
                <td>${name}</td>
                    <td>${role}</td>
                    <td>${arangeName(
                      [nameArr[0], nameArr[1]],
                      firstDotLast
                    )}@gmail.com</td>
                </tr>`;
    }
    createTable(rows);
  }

  function createTable(rows) {
    table = `<table id="table">
            <tr id="tableHeader">
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                </tr>
                ${rows}
                </table>`;
  }
  tableWindow = window.open("", "_blank");
  // tableWindow.document.body.innerHTML = table
}
linkedinScrapper();

// let addPage = document.getElementById("addPage")
// addPage.addEventListener("click", async() => {
//     emailFormat = document.getElementById('emailFormats').value
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: linkedinScrapper,
//     });

// });

// v2

// let emailFormat = '';

// function linkedInScrapper() {
//     let personJobs = []
//     let rows = ''
//     let table = ''

//     function getName(i) {
//         try {
//             return (document.querySelectorAll(".org-people-profile-card__profile-title.t-black.lt-line-clamp.lt-line-clamp--single-line.ember-view")[i].innerText)

//         } catch (error) {}
//     }

//     function getRole(i) {
//         const newRole = document.querySelectorAll(".lt-line-clamp.lt-line-clamp--multi-line.ember-view:not(.t-16):not(.t-bold)")[i].childNodes[1].data
//         return newRole

//     }

//     function user(userName, role) {
//         return {
//             Name: userName,
//             Role: role
//         }
//     }

//     function getList() {
//         try {
//             for (let i = 0; i < document.querySelectorAll(".artdeco-entity-lockup__title").length; i++) {
//                 if (getName(i) == undefined) {
//                     continue
//                 }
//                 personJobs.push(user(getName(i), getRole(i)))
//             }
//         } catch (error) {
//             personJobs
//         }
//         console.log(personJobs);
//         makeRows(personJobs)
//     }

//     function searchRoles(arr) {
//         return arr.filter(val => val.Role == "ad")

//     }

//     function firstDotLast(nameArr) {
//         return `${nameArr[0]}.${nameArr[1]}`
//     }

//     function arangeName(nameArr, format) {
//         return format([nameArr[0], nameArr[1]])
//     }

//     function makeRows(personJobs) {
//         for (i = 0; i < personJobs.length; i++) {
//             let name = personJobs[i].Name
//             let role = personJobs[i].Role
//             let nameArr = name.split(' ')
//             if (nameArr.length > 2) {
//                 rows += `<tr>
//                 <td>${name}</td>
//                 <td>${role}</td>
//                 <td>${arangeName([nameArr[0],nameArr[2]], firstDotLast)}@gmail.com</td>
//             </tr>`
//             }
//             rows += `<tr>
//             <td>${name}</td>
//                 <td>${role}</td>
//                 <td>${arangeName([nameArr[0],nameArr[1]], firstDotLast)}@gmail.com</td>
//             </tr>`

//         }
//         createTable(rows)
//     }

//     function createTable(rows) {
//         table = `<table id="table">
//         <tr id="tableHeader">
//             <th>Name</th>
//             <th>Role</th>
//             <th>Email</th>
//             </tr>
//             ${rows}
//             </table>`
//     }
//     // tableWindow = window.open("", "_blank")
//     // tableWindow.document.body.innerHTML = table
//     console.log('hi')
//     return table;
// }

// let addPage = document.getElementById("addPage")
// addPage.addEventListener("click", async() => {
//     emailFormat = document.getElementById('emailFormats').value
//     console.log(emailFormat)
//         // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//         // chrome.scripting.executeScript({
//         //     target: { tabId: tab.id },
//         //     function: linkedinScrapper,
//         // });
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
//         .then(([tab]) => linkedinScrapper([tab]));
// });

// v3

// let emailFormat = '';
// let rows = ''
// let table = ''

// function linkedinScrapper() {
//     let personJobs = []
//     personJobs = getList()
//     window.addEventListener('message', event => {
//         chrome.runtime.sendMessage(event.data);
//     });

//     function getName(i) {
//         try {
//             return (document.querySelectorAll(".org-people-profile-card__profile-title.t-black.lt-line-clamp.lt-line-clamp--single-line.ember-view")[i].innerText)

//         } catch (error) {}
//     }

//     function getRole(i) {
//         const newRole = document.querySelectorAll(".lt-line-clamp.lt-line-clamp--multi-line.ember-view:not(.t-16):not(.t-bold)")[i].childNodes[1].data
//         return newRole

//     }

//     function user(userName, role) {
//         return {
//             Name: userName,
//             Role: role
//         }
//     }

//     function getList() {
//         try {
//             for (let i = 0; i < document.querySelectorAll(".artdeco-entity-lockup__title").length; i++) {
//                 if (getName(i) == undefined) {
//                     continue
//                 }
//                 personJobs.push(user(getName(i), getRole(i)))
//             }
//         } catch (error) {
//             personJobs
//         }
//         console.log(personJobs);
//         window.postMessage(JSON.stringify(personJobs), '*');
//     }

// }

// let addPage = document.getElementById("addPage")
// addPage.addEventListener("click", async() => {
//     emailFormat = document.getElementById('emailFormats').value
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: linkedinScrapper,
//     });
// });

// // -_____

// console.log(list);

// function searchRoles(arr) {
//     return arr.filter(val => val.Role == "ad")

// }

// function firstDotLast(nameArr) {
//     return `${nameArr[0]}.${nameArr[1]}`
// }

// function arangeName(nameArr, format) {
//     return format([nameArr[0], nameArr[1]])
// }

// function makeRows(personJobs) {
//     for (i = 0; i < personJobs.length; i++) {
//         let name = personJobs[i].Name
//         let role = personJobs[i].Role
//         let nameArr = name.split(' ')
//         if (nameArr.length > 2) {
//             rows += `<tr>
//             <td>${name}</td>
//             <td>${role}</td>
//             <td>${arangeName([nameArr[0],nameArr[2]], firstDotLast)}@gmail.com</td>
//             </tr>`
//         }
//         rows += `<tr>
//         <td>${name}</td>
//         <td>${role}</td>
//         <td>${arangeName([nameArr[0],nameArr[1]], firstDotLast)}@gmail.com</td>
//         </tr>`

//     }
//     createTable(rows)
// }

// function createTable(rows) {
//     table = `<table id="table">
//     <tr id="tableHeader">
//     <th>Name</th>
//     <th>Role</th>
//     <th>Email</th>
//     </tr>
//     ${rows}
//     </table>`
// }

// // tableWindow = window.open("", "_blank")
// // tableWindow.document.body.innerHTML = table

// v4

// let emailFormat = '';
// let rows = ''
// let table = ''

// function linkedinScrapper() {
//     let personJobs = []
//     personJobs = getList()
//     window.addEventListener('message', event => {
//         chrome.runtime.sendMessage(event.data);
//     });

//     function getName(i) {
//         try {
//             return (document.querySelectorAll(".org-people-profile-card__profile-title.t-black.lt-line-clamp.lt-line-clamp--single-line.ember-view")[i].innerText)

//         } catch (error) {}
//     }

//     function getRole(i) {
//         const newRole = document.querySelectorAll(".lt-line-clamp.lt-line-clamp--multi-line.ember-view:not(.t-16):not(.t-bold)")[i].childNodes[1].data
//         return newRole

//     }

//     function user(userName, role) {
//         return {
//             Name: userName,
//             Role: role
//         }
//     }

//     function getList() {
//         try {
//             for (let i = 0; i < document.querySelectorAll(".artdeco-entity-lockup__title").length; i++) {
//                 if (getName(i) == undefined) {
//                     continue
//                 }
//                 personJobs.push(user(getName(i), getRole(i)))
//             }
//         } catch (error) {
//             personJobs
//         }
//         console.log(personJobs);
//         window.postMessage(JSON.stringify(personJobs), '*');
//     }

// }

// let addPage = document.getElementById("addPage")
// addPage.addEventListener("click", async() => {
//     emailFormat = document.getElementById('emailFormats').value
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: linkedinScrapper,
//     });
// });

// -_____

// console.log(list);

// function searchRoles(arr) {
//     return arr.filter(val => val.Role == "ad")

// }

// function firstDotLast(nameArr) {
//     return `${nameArr[0]}.${nameArr[1]}`
// }

// function arangeName(nameArr, format) {
//     return format([nameArr[0], nameArr[1]])
// }

// function makeRows(personJobs) {
//     for (i = 0; i < personJobs.length; i++) {
//         let name = personJobs[i].Name
//         let role = personJobs[i].Role
//         let nameArr = name.split(' ')
//         if (nameArr.length > 2) {
//             rows += `<tr>
//             <td>${name}</td>
//             <td>${role}</td>
//             <td>${arangeName([nameArr[0],nameArr[2]], firstDotLast)}@gmail.com</td>
//             </tr>`
//         }
//         rows += `<tr>
//         <td>${name}</td>
//         <td>${role}</td>
//         <td>${arangeName([nameArr[0],nameArr[1]], firstDotLast)}@gmail.com</td>
//         </tr>`

//     }
//     createTable(rows)
// }

// function createTable(rows) {
//     table = `<table id="table">
//     <tr id="tableHeader">
//     <th>Name</th>
//     <th>Role</th>
//     <th>Email</th>
//     </tr>
//     ${rows}
//     </table>`
// }

// tableWindow = window.open("", "_blank")
// tableWindow.document.body.innerHTML = table

// v5-------------------

console.log(`scrapper`);

// window.addEventListener("message", (event) => {
//   chrome.runtime.sendMessage(event.data);
// });

// let addPage = document.getElementById("addPage");
// addPage.addEventListener("click", () => {
//   let emailFormat = document.getElementById("emailFormats").value;
//   let domain = document.getElementById("domain").value;
//   let entireName = document.getElementById("entireName");
//   let email = document.getElementById("email");
//   let role = document.getElementById("role");
//   console.log(emailFormat, domain, entireName, email, role);
//   let settings = {
//     emailFormat: emailFormat,
//     domain: domain,
//     entireName: entireName,
//     email: email,
//     role: role,
//   };
//   //   window.postMessage(JSON.stringify(settings), "*");
//   chrome.storage.sync.set({ set: JSON.stringify(settings) }, function () {
//     console.log("Value is set to " + JSON.stringify(settings));
//   });
// });

// v6

addPage.addEventListener("click", () => {
  getCurrentTab();
  async function getCurrentTab() {
    const queryOptions = { active: true, currentWindow: true };
    const [tab] = await chrome.tabs.query(queryOptions);
    const url = await tab.url;
    console.log(url);
    const response = await fetch(url);
    const siteHtml = await response.text();
    siteHtml;
  }
});
