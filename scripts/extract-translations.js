var fs = require('fs');
var tsFileStruct = require('ts-file-parser');

const enMap = extractTranslations('./src/app/core/language/translations/language-english.ts');
const ruMap = extractTranslations('./src/app/core/language/translations/language-russian.ts');
const frMap = extractTranslations('./src/app/core/language/translations/language-french.ts');
const arMap = extractTranslations('./src/app/core/language/translations/language-arabic.ts');

function extractTranslations(filePath) {

    var decls = fs.readFileSync(filePath).toString();

    var jsonStructure = tsFileStruct.parseStruct(decls, {}, filePath);

    let map = {};
    (jsonStructure.classes[0].fields).forEach(word => {
        let value = word.valueConstraint ? word.valueConstraint.value : '';
        if(value.includes('this.')){
            const key = value.replace('this.', '');
            value =  map[key]
        }
        map = { ...map, [word.name]: value};
    });

    return map;
}

function createRow(keys, separator){
    let row ='';
    keys.forEach(key => {
        let data
        if (Array.isArray(key)) {
            data = key.join(' ')
        } else if (key !== undefined) {
            data = key;
        } else {
            data = '';
        }
        row += '"' + data.replace(/"/g, '""') + '"' + separator;
    })
    row += "\n"
    return row;
}

function convertToCSV() {
    const keys = Object.keys(enMap);
    let csv = '';
    keys.forEach((key) => {
        let row = createRow([key, enMap[key], arMap[key], frMap[key], ruMap[key]], ',');
        csv += row;
    })
    fs.writeFile('withArabic.csv', csv, function (err) {
        if (err) return console.log(err);
        console.log('CSV created');
    });
    return csv;
}


convertToCSV();
