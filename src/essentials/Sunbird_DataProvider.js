import { stringify } from 'query-string';
import { Octokit } from 'octokit';

const apiUrl = 'https://api.github.com/repos';

const octokit = new Octokit({
    auth: process.env.GH_TOKEN
})

export default {
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            page: JSON.stringify(page),
            per_page: JSON.stringify(perPage),
            filter: JSON.stringify(params.filter.commit?.author?.name),
        };
        const url = `${apiUrl}/${resource}/commits`;
        console.log(url);
        const author = query.filter?.replace(/['"]+/g, '');
        let author_filter = "";
        if(author!=undefined){
            author_filter =  `author=${author}`;
        }
        const json = await octokit.request(`GET ${url}?${author_filter}`);
        console.log(`${url}?${author_filter}`);
        json.data.map(d => {
            return d["id"] = d["sha"];
        })
        return {data: json.data, total: json.length}
    }
};
