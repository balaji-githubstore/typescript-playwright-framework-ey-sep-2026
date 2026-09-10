import fs from 'fs'


export class JsonUtils
{
    public static getJsonValue(key:string):any
    {
        const jsonObj=JSON.parse(fs.readFileSync("test-data/data.json","utf-8"))
        return jsonObj[key]
    }
}


