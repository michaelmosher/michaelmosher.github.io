
let dataLabels = []
let index = 0

function my_table_open() {
    dataLabels = []
    return '<table>\n';
}

function my_th_open(tokens, idx) {
    let th_content = tokens[idx + 1].content
    dataLabels.push(th_content)
    return '<th>';
}

function my_td_open() {
  return `<td data-label=${dataLabels[index++ % dataLabels.length]} >`;
};

export function table_plugin(md) {
    md.renderer.rules.table_open = my_table_open
    md.renderer.rules.th_open = my_th_open
    md.renderer.rules.td_open = my_td_open
}