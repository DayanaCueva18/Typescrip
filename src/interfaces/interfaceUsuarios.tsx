// Generated by https://quicktype.io
//Comand palette. >control+shift+p

export interface Usuarioslistado {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Usuario[];
    support:     Support;
}

//fn+f2->cambio total del nombre de una variable 
export interface Usuario {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}