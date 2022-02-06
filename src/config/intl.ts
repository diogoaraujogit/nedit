import { IntlProps } from '../types';

const intlDictionary: IntlProps = {
  pt: {
    username: 'Usuário',
    password: 'Senha',
    forgotPassword: 'Esqueci a senha',
    logIn: 'ENTRAR',
    import: 'IMPORTAR',
    theme: 'Tema',
    manual: 'Manual',
    reloadPage: 'Recarregar Página',
    language: 'Idioma',
    export: 'EXPORTAR',
    project: 'PROJETO',
    busRoute: 'ROTEIRO',
    panel: 'PAINEL',
    editor: 'EDITOR',
    createProject: 'Criar Projeto',
    editProject: 'Editar Projeto',
    createProjectDescription:
      'Defina um nome para seu projeto, adicione painéis e indique suas posições para configurá-los mais a frente.',
    projectName: 'Nome',
    address: 'Endereço',
    format: 'Modelo',
    position: 'Posição',
    color: 'Cor principal',
    prefix: 'Prefixo',
    prefixColor: 'Cor do prefixo',
    addPanel: 'ADICIONAR PAINEL',
    logout: 'Sair',
    exit: 'SAIR',
    createProjectButton: 'CRIAR PROJETO',
    panelModal: 'Painel',
    edit: 'Editar',
    duplicate: 'Duplicar',
    delete: 'Excluir',
    sendNFrota: 'Enviar para o NFrota',
    createBusRoute: 'CRIAR ROTEIRO',
    createBusRouteDescription: 'Adicione um roteiro',
    busNumber: 'Número',
    busName: 'Nome',
    busMode: 'Modo',
    createBusRouteButton: 'Criar roteiro',
    normalTag: 'Normal',
    roundTripTag: 'Ida e Volta',
    extraTag: 'Extra',
    select: 'Selecionar',
    frontPosition: 'Frontal',
    leftPosition: 'Lateral esquerda',
    rightPosition: 'Lateral direita',
    blue: 'Azul',
    red: 'Vermelho',
    green: 'Verde',
    amber: 'Ambar',
    white: 'Branco',
    fullColor: 'Full Color',
    disabled: 'Desabilitado',
    save: 'SALVAR',
    create: 'CRIAR',
    removePanel: 'Remover painel',
    removePanelDescription:
      'Podem existir roteiros configurados a esse painel. Você deseja remover esse painel?',
    removeProject: 'Remover projeto',
    removeProjectDescription:
      'Podem existir roteiros e painéis configurados a esse projeto. Você deseja remover esse projeto?',
    cancel: 'CANCELAR',
    remove: 'REMOVER',
    removeBusRoute: 'Excluir roteiro',
    removeBusRouteDescription: 'Você deseja remover esse roteiro?',
    panels: 'painéis',
    busRouteModal: 'Roteiro',
    createModal: 'Criar',
    exportProject: 'Exportar Projeto',
    exportProjectDescription:
      'Selecione quais projetos deseja exportar e qual formato deseja.',
    exportModal: 'EXPORTAR',
    importProject: 'Importar Projeto',
    importProjectDescription:
      'Selecione o formato e o arquivo dos projetos que deseja importar',
    selectFile: 'Selecionar arquivo',
    importModal: 'IMPORTAR',
    fileExtension: 'Extensão do arquivo',

    noProjectFound: 'Nenhum projeto encontrado',
    noRouteFound: 'Nenhum roteiro encontrado',
    noProjectSelected: 'Nenhum projeto selecionado',
    noPanelFound: 'Nenhum painel encontrado',
    noRouteSelected: 'Nenhum roteiro selecionado',

    deleteSuccess: 'Excluído com sucesso!',
    createSuccess: 'Criado com sucesso!',
    duplicateSuccess: 'Duplicado com sucesso!',
    editSuccess: 'Editado com sucesso!',
    nfrotaSuccess: 'Enviado para o NFrota!',
    exportSuccess: 'Exportado com sucesso!',
    importSuccess: 'Importado com sucesso!',
    spacing: 'ESPAÇAMENTO',
    screenTime: 'TEMPO DE TELA',
    SlideUpwards: 'Deslizar para cima',
    SlideDownwards: 'Deslizar para baixo',
    SlideTotheLeft: 'Deslizar para esquerda',
    SlideTotheRight: 'Deslizar para direita',
    Reveal: 'Revelar',
    RevealInverted: 'Revelar invertido',
    Dissolve: 'Dissolver',
    DissolveInverted: 'Dissolver invertido',
    Overlap: 'Sobrepor',
    BounceBack: 'Quicar',
    Scroll: 'Texto rotativo',
    ScrollWithTwoLines: 'Texto rotativo com duas linhas',
    normalTransition: 'Transição normal',
    pushToRight: 'Empurrar para a direita',
    pushToLeft: 'Empurrar para a esquerda',
    pushUpwards: 'Empurrar para cima',
    pushDownwards: 'Empurrar para baixo',
    speed: 'VELOCIDADE',
    slowSpeed: 'Lenta',
    averageSpeed: 'Média',
    fastSpeed: 'Rápida',
    going: 'Ida',
    returning: 'Volta',
    staticPrefix: 'Prefixo Estático',
    invertPanelColor: 'Inverter Cor do Painel',
    invertPrefixColor: 'Inverter Cor do Prefixo',
    newScreen: 'NOVA TELA',
    duplicateScreen: 'Duplicar Tela',
    simulation: 'SIMULAÇÃO',
    stopSimulation: 'PARAR SIMULAÇÃO',
    drawingMode: 'Modo Desenho',
    downloadTemplate: 'BAIXAR MODELO',
    cleanScreen: 'Limpar Tela',
    copyPrefix: 'Copiar Prefixo',
    increaseSpacing: 'Aumentar Espaçamento',
    decreaseSpacing: 'Diminuir Espaçamento',
    insertDrawing: 'Inserir Desenho',
    aligntoCenter: 'Alinhar ao Centro',
    alignLeft: 'Alinhar a Esquerda',
    alignRight: 'Alinhar a Direita',
    alignMiddle: 'Alinhar ao Meio',
    alignBottom: 'Alinhar Abaixo',
    alignTop: 'Alinhar ao Topo',
    moveLeft: 'Mover para Esquerda',
    moveUp: 'Mover para Cima',
    moveDown: 'Mover para Baixo',
    moveRight: 'Mover para Direita',
    freeDrawing: 'Desenho Livre',
    rubber: 'Borracha',
    drawPixelByPixel: 'Desenhar Pixel a Pixel',
    saveScreenSuccess: 'Salvo com sucesso!',
    saveScreenError: 'Erro ao salvar.',
    getScreensError: 'Erro ao recarregar a lista.',
    exitDrawingModeDescription:
      'Pode haver alterações feitas e ao sair elas serão perdidas. Tem certeza que deseja sair?',
    exitDrawingMode: 'Sair do Modo Desenho',
    undo: 'Desfazer',
    redo: 'Refazer',
    confirm: 'CONFIRMAR',
    serverError: 'Erro no servidor. Contate o administrador',
    networkError: 'Erro de rede. Cheque a conexão com o servidor',
    authError: 'Autenticação necessária',
    loginError: 'Credenciais inválidas',
    multiline: 'Multilinha',
    removeMultiline: 'Remover Multilinha',
    autoAdjust: 'Auto Ajuste do Texto',
    noChangesToSave: 'Nenhuma alteração para salvar!',
    eraseDrawing: 'Apagar o desenho',
    checkDrawAndTransition:
      'Não é permitido desenho nesta transição. Deseja apagar o desenho?',
    discardChanges: 'Descartar alterações',
    discardChangesDescription:
      'Podem haver alterações no editor que não foram salvas. Deseja prosseguir mesmo assim?',
    discard: 'DESCARTAR',
    keep: 'MANTER',

    '4001': 'Os endereços dos painéis devem ser únicos.',
    '4002': 'Tipo de arquivo inválido. Consulte os manuais.',
    '4003': 'O nome do projeto é inválido. Consulte os manuais.',
    '4005': 'Extensão de arquivo inválida. Consulte os manuais.',
    '4007': 'Limite de 10 painéis por projeto.',
    '4008': 'Campo "número" deve ser único.',
  },
  en: {
    username: 'Username',
    password: 'Password',
    forgotPassword: 'Forgot your password?',
    logIn: 'LOGIN',
    import: 'IMPORT',
    theme: 'Theme',
    manual: 'Guide',
    reloadPage: 'Reload Page',
    language: 'Language',
    export: 'EXPORT',
    project: 'PROJECT',
    busRoute: 'BUS ROUTE',
    panel: 'PANEL',
    editor: 'EDITOR',
    createProject: 'Create Project',
    editProject: 'Edit Project',
    createProjectDescription: `Create a project name, add panels and set panels' properties.`,
    projectName: 'Name',
    address: 'Address',
    format: 'Model',
    position: 'Position',
    color: 'Main color',
    prefix: 'Prefix',
    prefixColor: 'Prefix Color',
    addPanel: 'ADD PANEL',
    logout: 'Logout',
    exit: 'EXIT',
    createProjectButton: 'CREATE PROJECT',
    panelModal: 'Panel',
    edit: 'Edit',
    duplicate: 'Duplicate',
    delete: 'Delete',
    sendNFrota: 'Send to NFrota',
    createBusRoute: 'CREATE BUS ROUTE',
    createBusRouteDescription: 'Add Bus Route',
    busNumber: 'Number',
    busName: 'Name',
    busMode: 'Mode',
    createBusRouteButton: 'Create bus route',
    normalTag: 'Normal',
    roundTripTag: 'Round Trip',
    extraTag: 'Extra',
    select: 'Select',
    frontPosition: 'Front',
    leftPosition: 'Left',
    rightPosition: 'Right',
    blue: 'Blue',
    red: 'Red',
    green: 'Green',
    amber: 'Amber',
    white: 'White',
    fullColor: 'Full Color',
    disabled: 'Disabled',
    save: 'SAVE',
    create: 'CREATE',
    removePanel: 'Remove panel',
    removePanelDescription:
      'There may be routes using it. Do you want to remove this panel anyway?',
    removeProject: 'Remove project',
    removeProjectDescription:
      'There may be routes and panels associated to it. Do you want to remove this project anyway?',
    cancel: 'CANCEL',
    remove: 'REMOVE',
    removeBusRoute: 'Remove bus route',
    removeBusRouteDescription: 'Do you want to remove this bus route?',

    panels: 'panels',
    busRouteModal: 'Bus Route',
    createModal: 'Create',
    exportProject: 'Export Project',
    exportProjectDescription:
      'Select which projects you would like to export and the file extension',
    exportModal: 'EXPORT',
    importProject: 'Import Project',
    importProjectDescription:
      'Choose the file you would like to import and its extension.',
    selectFile: 'Choose file',
    importModal: 'IMPORT',
    fileExtension: 'File extension',

    noProjectFound: 'No project found',
    noRouteFound: 'No bus route found',
    noProjectSelected: 'No project selected',
    noPanelFound: 'No panel found',
    noRouteSelected: 'No bus route selected',

    deleteSuccess: 'Successfully deleted!',
    createSuccess: 'Successfully created!',
    duplicateSuccess: 'Successfully duplicated!',
    editSuccess: 'Successfully edited!',
    nfrotaSuccess: 'Successfully sent to NFrota!',
    exportSuccess: 'Successfully exported!',
    importSuccess: 'Successfully imported',
    spacing: 'SPACING',
    screenTime: 'SCREEN TIME',
    SlideUpwards: 'Slide up',
    SlideDownwards: 'Slide down',
    SlideTotheLeft: 'Slide left',
    SlideTotheRight: 'Slide right',
    Reveal: 'Reveal',
    RevealInverted: 'Reveal inverted',
    Dissolve: 'Dissolve',
    DissolveInverted: 'Dissolve inverted',
    Overlap: 'Overlap',
    BounceBack: 'Bounceback',
    Scroll: 'Scroll',
    ScrollWithTwoLines: 'Scrollwithtwolines',
    normalTransition: 'Normal transition',
    pushToRight: 'Push to right',
    pushToLeft: 'Push to left',
    pushUpwards: 'Push upwards',
    pushDownwards: 'Push downwards',
    speed: 'SPEED',
    slowSpeed: 'Slow',
    averageSpeed: 'Average',
    fastSpeed: 'Fast',
    going: 'Going',
    returning: 'Returning',
    staticPrefix: 'Static Prefix',
    invertPanelColor: 'Invert Panel Color',
    invertPrefixColor: 'Invert Prefix Color',
    newScreen: 'NEW SCREEN',
    duplicateScreen: 'Duplicate Screen',
    stopSimulation: 'STOP SIMULATION',
    simulation: 'SIMULATION',
    drawingMode: 'Drawing Mode',
    downloadTemplate: 'DOWNLOAD TEMPLATE',
    cleanScreen: 'Clean Screen',
    copy: 'Copy',
    copyPrefix: 'Copy Prefix',
    increaseSpacing: 'Increase Spacing',
    decreaseSpacing: 'Decrease Spacing',
    insertDrawing: 'Insert Drawing',
    aligntoCenter: 'Align to Center',
    alignLeft: 'Align Left',
    alignRight: 'Align Right',
    alignMiddle: 'Align Middle',
    alignBottom: 'Align Bottom',
    alignTop: 'Align Top',
    moveLeft: 'Move Left',
    moveUp: 'Move Up',
    moveDown: 'Move Down',
    moveRight: 'Move Right',
    freeDrawing: 'Free Drawing',
    rubber: 'Rubber',
    drawPixelByPixel: 'Braw Pixel by Pixel',
    saveScreenSuccess: 'Saved successfully!',
    saveScreenError: 'Save error.',
    getScreensError: 'Get screens error.',
    exitDrawingModeDescription:
      'There may be changes made and when exiting they will be lost. Are you sure you want to quit?',
    exitDrawingMode: 'Exit Drawing Mode',
    undo: 'Undo',
    redo: 'Redo',
    confirm: 'CONFIRM',
    serverError: 'Internal Server Error. Contact the server administrator.',
    networkError: 'Network Error. Check connection with server',
    authError: 'Authentication required',
    loginError: 'Invalid credentials',
    multiline: 'Multiline',
    removeMultiline: 'Remove Multiline',
    autoAdjust: 'Auto Adjust Text',
    noChangesToSave: 'No changes to save!',
    eraseDrawing: 'Erase the drawing',
    checkDrawAndTransition:
      'Drawing is not allowed in this transition. Do you want to erase the drawing?',
    discardChanges: 'Discard changes',
    discardChangesDescription:
      'There may be changes in the editor that were not saved. Do you want to proceed anyway?',
    discard: 'DISCARD',
    keep: 'KEEP',

    '4001': 'Panels can not have the same address.',
    '4002': 'Invalid file type. Check the manuals.',
    '4003': 'Invalid project name. Check the manuals.',
    '4005': 'Invalid file extension. Check the manuals.',
    '4007': 'Maximum 10 panels per project reached.',
    '4008': 'Field "number" must be unique.',
  },
  es: {
    username: 'Usuário',
    password: 'Contraseña',
    forgotPassword: 'Olvidé la contraseña',
    logIn: 'ENTRAR',
    import: 'IMPORTAR',
    theme: 'Tema',
    manual: 'Manual',
    reloadPage: 'Recarregar Página',
    language: 'Idioma',
    export: 'EXPORTAR',
    project: 'PROYECTO',
    busRoute: 'ITINERARIO',
    panel: 'PANEL',
    editor: 'EDITOR',
    createProject: 'Crear proyecto',
    editProject: 'Editar proyecto',
    createProjectDescription:
      'Defina un nombre para su proyecto, agregue paneles e indique sus posiciones para configurarlos posteriormente.',
    projectName: 'Nombre',
    address: 'Dirección',
    format: 'Modelo',
    position: 'Posición',
    color: 'Color principal',
    prefix: 'Prefijo',
    prefixColor: 'Color del prefijo',
    addPanel: 'AGREGAR PANEL',
    logout: 'Salir',
    exit: 'SALIR',
    createProjectButton: 'CREAR PROYECTO',
    panelModal: 'Panel',
    edit: 'Editar',
    duplicate: 'Duplicar',
    delete: 'Eliminar',
    sendNFrota: 'Enviar a NFrota',
    createBusRoute: 'CREAR ITINERARIO',
    createBusRouteDescription: 'Agregar itinerario',
    busNumber: 'Número',
    busName: 'Nombre',
    busMode: 'Modo',
    createBusRouteButton: 'Crear itinerario',
    normalTag: 'Normal',
    roundTripTag: 'Ida y Vuelta',
    extraTag: 'Extra',
    select: 'Seleccionar',
    frontPosition: 'Delantera',
    leftPosition: 'Lado izquierdo',
    rightPosition: 'Lado derecho',
    blue: 'Azul',
    red: 'Rojo',
    green: 'Verde',
    amber: 'Ámbar',
    white: 'Blanco',
    fullColor: 'Full Color',
    disabled: 'Discapacitado',
    save: 'GUARDAR',
    create: 'CREAR',
    removePanel: 'Quitar panel',
    removePanelDescription:
      'Puede haber itinerarios configurados para este panel. ¿Quieres eliminar este panel?',
    removeProject: 'Eliminar proyecto',
    removeProjectDescription:
      'Puede haber itinerarios y paneles configurados para este proyecto. ¿Quieres eliminar este proyecto?',
    cancel: 'CANCELAR',
    remove: 'QUITAR',
    removeBusRoute: 'Eliminar itinerario',
    removeBusRouteDescription: '¿Quieres eliminar este itinerario?',
    panels: 'paneles',
    busRouteModal: 'Itinerario',
    createModal: 'Crear',
    exportProject: 'Exportar Proyecto',
    exportProjectDescription:
      'Seleccione qué proyectos desea exportar y qué formato desea.',
    exportModal: 'EXPORTAR',
    importProject: 'Importar Proyecto',
    importProjectDescription:
      'Seleccione el formato y archivo de los proyectos que desea importar',
    selectFile: 'Seleccionar archivo',
    importModal: 'IMPORTAR',
    fileExtension: 'Extensión de archivo',

    noProjectFound: 'No se encontraron proyectos',
    noRouteFound: 'No se encontraron itinerarios',
    noPanelFound: 'No se encontró ningún panel',
    noProjectSelected: 'Ningún proyecto seleccionado',
    noRouteSelected: 'Ningún itinerario seleccionado',

    deleteSuccess: '¡Eliminado con éxito!',
    createSuccess: '¡Creado con éxito!',
    duplicateSuccess: '¡Duplicado con éxito!',
    editSuccess: '¡Editado con éxito!',
    nfrotaSuccess: '¡Enviado a NFrota!',
    exportSuccess: '¡Exportado con éxito!',
    importSuccess: '¡Importado con éxito!',
    spacing: 'ESPACIADO',
    screenTime: 'TIEMPO DE PANTALLA',
    SlideUpwards: 'Deslizar para arriba',
    SlideDownwards: 'Deslizar para abajo',
    SlideTotheLeft: 'Deslizar para la izquierda',
    SlideTotheRight: 'Deslizar para la derecha',
    Reveal: 'Revelar',
    RevealInverted: 'Revelar invertido',
    Dissolve: 'Disolver',
    DissolveInverted: 'Disolver invertido',
    Overlap: 'Sobreponer',
    BounceBack: 'Rebotar',
    Scroll: 'Texto rotativo',
    ScrollWithTwoLines: 'Texto rotativo 2 lineas',
    normalTransition: 'Transición normal',
    pushToRight: 'Empujar a la derecha',
    pushToLeft: 'Empujar a la izquierda',
    pushUpwards: 'Hacer subir',
    pushDownwards: 'Empuje hacia abajo',
    speed: 'VELOCIDAD',
    slowSpeed: 'Lenta',
    averageSpeed: 'Média',
    fastSpeed: 'Rápida',
    going: 'Ida',
    returning: 'Vuelta',
    staticPrefix: 'Prefijo Estático',
    invertPanelColor: 'Invertir Color Panel',
    invertPrefixColor: 'Invertir Color Prefijo',
    newScreen: 'NUEVA PANTALLA',
    duplicateScreen: 'Duplicar Pantalla',
    simulation: 'SIMULACIÓN',
    stopSimulation: 'DETENER SIMULACIÓN',
    drawingMode: 'Modo de Diseño',
    downloadTemplate: 'DESCARGAR MODELO',
    cleanScreen: 'Pantalla Limpia',
    copy: 'Copiar',
    copyPrefix: 'Copiar Prefijo',
    increaseSpacing: 'Aumentar el Espaciado',
    decreaseSpacing: 'Disminuir el Espaciado',
    insertDrawing: 'Insertar Dibujo',
    aligntoCenter: 'Alinear al Centro',
    alignLeft: 'Alinear a la Izquierda',
    alignRight: 'Alinear a la Derecha',
    alignMiddle: 'Alinear en el Medio',
    alignBottom: 'Alinear hacia Abajo',
    alignTop: 'Alinear a la Parte Superior',
    moveLeft: 'Mover hacia la Izquierda',
    moveUp: 'Mover para Arriba',
    moveDown: 'Mover para Abajo',
    moveRight: 'Mover hacia la Derecha',
    freeDrawing: 'Diseño Libre',
    rubber: 'Caucho',
    drawPixelByPixel: 'Dibujar Píxel por Píxel',
    saveScreenSuccess: 'Guardado exitosamente!',
    saveScreenError: 'Error al guardar.',
    getScreensError: 'Error al recargar la lista.',
    exitDrawingModeDescription:
      'Puede haber cambios hechos y al salir se perderán. ¿Seguro que quieres salir?',
    exitDrawingMode: 'Salir del Modo de Diseño',
    undo: 'Deshacer',
    redo: 'Rehacer',
    confirm: 'CONFIRMAR',
    serverError:
      'Error del Servidor. Póngase en contacto con el administrador.',
    networkError: 'Error de red. Compruebe la conexión con el servidor.',
    authError: 'Autenticacion requerida.',
    loginError: 'Credenciales no válidas.',
    multiline: 'Multilínea',
    removeMultiline: 'Eliminar Multilínea',
    autoAdjust: 'Ajuste Automático del Texto',
    noChangesToSave: 'No hay cambios para guardar!',
    eraseDrawing: 'Borrar el dibujo',
    checkDrawAndTransition:
      'No se permite dibujar en esta transición. ¿Quieres borrar el dibujo?',
    discardChanges: 'Descartar los cambios',
    discardChangesDescription:
      'Puede haber cambios en el editor que no se guardaron. ¿Desea continuar de todos modos?',
    discard: 'DESCARTAR',
    keep: 'MANTENER',

    '4001': 'Las direcciones de los paneles deben ser únicas.',
    '4002': 'Tipo de archivo no válido. Consulta los manuales.',
    '4003': 'El nombre del proyecto no es válido. Consulta los manuales.',
    '4005': 'Extensión de archivo no válida. Consulta los manuales.',
    '4007': 'Límite de 10 paneles por proyecto.',
    '4008': 'El campo "número" debe ser único.',
  },
};

export default intlDictionary;
