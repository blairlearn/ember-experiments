App.Atoz = DS.Model.extend({
    title: DS.attr("string"),
    query: DS.attr("string"),
    //dictionary: DS.belongsTo("dictionary")
});

App.Atoz.FIXTURES = [
    {id: 0, title: "#", query: "%23"},
    {id: 1, title: "A", query: "a"},
    {id: 2, title: "B", query: "b"},
    {id: 3, title: "C", query: "c"},
    {id: 4, title: "D", query: "d"},
    {id: 5, title: "E", query: "e"},
    {id: 6, title: "F", query: "f"},
    {id: 7, title: "G", query: "g"},
    {id: 8, title: "H", query: "h"},
    {id: 9, title: "I", query: "i"},
    {id: 10, title: "J", query: "j"},
    {id: 11, title: "K", query: "k"},
    {id: 12, title: "L", query: "l"},
    {id: 13, title: "M", query: "m"},
    {id: 14, title: "N", query: "n"},
    {id: 15, title: "O", query: "o"},
    {id: 16, title: "P", query: "p"},
    {id: 17, title: "Q", query: "q"},
    {id: 18, title: "R", query: "r"},
    {id: 19, title: "S", query: "s"},
    {id: 20, title: "T", query: "t"},
    {id: 21, title: "U", query: "u"},
    {id: 22, title: "V", query: "v"},
    {id: 23, title: "W", query: "w"},
    {id: 24, title: "X", query: "x"},
    {id: 25, title: "Y", query: "y"},
    {id: 26, title: "Z", query: "z"}
];