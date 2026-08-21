export const products={
omega:{name:"OMEGA",price:35,desc:"Nossa otimização mais completa para máximo desempenho.",deliveryUrl:"https://www.mediafire.com/file/dlrwhlg55bs24yd/OMEGA+PACK.rar/file"},
suprema:{name:"Otimização Suprema",price:20,desc:"Pacote avançado focado em desempenho e estabilidade.",deliveryUrl:"https://www.mediafire.com/file/qonfhhdpw2cv2dp/OTIMIZAÇÃO+SUPREMA.rar/file"},
avancada:{name:"Otimização Avançada",price:10,desc:"Equilíbrio entre desempenho e estabilidade.",deliveryUrl:"https://www.mediafire.com/file/tp3frlm67pong3i/OTIMIZA%25C3%2587%25C3%2583O_AVAN%25C3%2587ADA.rar/file"},
basica:{name:"Otimização Básica",price:5,desc:"O essencial para começar a otimizar o Windows.",deliveryUrl:"https://www.mediafire.com/file/vb4klwyfxmxt5sa/OTIMIZA.rar"},
fivem:{name:"Pack FiveM",price:10,desc:"Configurações focadas no FiveM.",deliveryUrl:"https://www.mediafire.com/file/jo8wbg6d5llua2j/FIVEM_BOOST.rar/file"},
sensi:{name:"Pack Sensi",price:5,desc:"Pack de configurações de sensibilidade.",deliveryUrl:"https://www.mediafire.com/file/n9ykc869wesglg0/sensi.rar"}
} as const;
export type ProductKey=keyof typeof products;
