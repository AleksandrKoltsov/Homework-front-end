export class ViewBook{
    constructor(addLine){
        this.btnAdd = document.querySelector('.add');
        this.list = document.querySelector('.phoneBook');
        this.i = 1;

        this.list.addEventListener('click', this.tableclick, false);
        this.btnAdd.addEventListener('click', addLine);
        document.addEventListener('DOMContentLoaded', this.sort);
    }

    renderCont(data){//вывод на экран полученного объекта из контроллера
        console.log(data);
        const tr = document.createElement('tr');
            tr.innerHTML += `
            <tr class="container">
                <td>${this.i++}</td>
                <td>${data.name.first} ${data.name.last}</td>
                <td>${data.gender}</td>
                <td>${data.dob.age}</td>
                <td>${data.login.username}</td>
                <td>${data.login.password}</td>
                <td>${data.email}</td>
                <td>${data.phone}</td>
                <td><input type="button" value="Delete"></td>
            </tr>
            `;
        this.list.appendChild(tr); 
        }
     
        tableclick(e) {//удаляем строку
            e.target.value == "Delete" ? e.target.parentNode.parentNode.remove() : 0;
        }
        sort(){ //интересный метод сортировки таблицы по ячейкам по клику
            const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

            const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
                v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
                )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
            
            document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
                const table = th.closest('table');
                Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
                    .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
                    .forEach(tr => table.appendChild(tr) );
            })));
        }
        
}