/*
    this file contains some hackery to make Remarkable and mini.css play
    nicely together.

    To properly render tables in mobile views, mini.css requires that
    each td element have a "data-label" attribute set equal to the
    content of the th element it would normally sit under.

    Because those DOM elements are generated dynamically by Remarkable,
    we need to modify Remarkable's table rendering rules to add the
    attributes.
*/

let dataLabels = []
let index = 0

function my_table_open() {
    // reset global values (I know this is generally bad practice)
    dataLabels = []
    index = 0

    // original table_open behavior
    return '<table>\n';
}

function my_th_open(tokens, idx) {
    // for each th element, add its content to the dataLabels array
    let th_content = tokens[idx + 1].content
    dataLabels.push(th_content)

    // original th_open behavior
    return '<th>';
}

function my_td_open() {
    /*
        as td elements are generated, loop through the dataLabels
        array, assigning the proper label to each td, and then
        incrementing the index.

        Note that there are <dataLabels.length> th elements and
        <table rows> * <dataLabels.length> td elements, so we will
        loop through dataLabels multiple times.
    */
    return `<td data-label=${dataLabels[index++ % dataLabels.length]} >`;
};

export function table_plugin(md) {
    md.renderer.rules.table_open = my_table_open
    md.renderer.rules.th_open = my_th_open
    md.renderer.rules.td_open = my_td_open
}