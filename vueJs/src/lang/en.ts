export default {
  route: {
    dashboard: 'Dashboard',
    documentation: 'Documentation',
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    rolePermission: 'Role Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: 'Mixin',
    backToTop: 'Back To Top',
    draggableDialog: 'Draggable Dialog',
    draggableKanban: 'Draggable Kanban',
    draggableList: 'Draggable List',
    draggableSelect: 'Draggable Select',
    charts: 'Charts',
    barChart: 'Bar Chart',
    lineChart: 'Line Chart',
    mixedChart: 'Mixed Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    table: 'Table',
    dynamicTable: 'Dynamic Table',
    draggableTable: 'Draggable Table',
    inlineEditTable: 'Inline Edit Table',
    complexTable: 'Complex Table',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    mergeHeader: 'Merge Header',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboard: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link',
    profile: 'Profile',
    tasks: 'tasks',
    admin: 'administration',
    users: 'users',
    roles: 'roles',
    tenants: 'tenants',
    settings: 'settings',
    apigateway: 'apigateway',
    group: 'group',
    global: 'global',
    route: 'route',
    aggregateRoute: 'aggregate',
    identityServer: 'identity server',
    clients: 'clients',
    apiresources: 'api resources',
    identityresources: 'id resources'
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    theme: 'Theme',
    size: 'Global Size',
    profile: 'Profile'
  },
  login: {
    title: 'Login Form',
    logIn: 'Login',
    register: 'register',
    notAccount: 'not account?',
    existsAccount: 'exists account?',
    forgotPassword: 'forgot password?',
    userLogin: 'password login',
    phoneLogin: 'phone login',
    resetpassword: 'reset password',
    tenantName: 'Tenantname',
    username: 'Username',
    password: 'Password',
    phoneNumber: 'phone number',
    phoneVerifyCode: 'phone verify code',
    sendVerifyCode: 'send verify code',
    afterSendVerifyCode: ' s resend after',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !',
    tokenExprition: 'The identity token has expired. Please log in again!',
    confirmLogout: 'confirm',
    relogin: 'relogin',
    cancel: 'cancel',
    tenantIsNotAvailable: 'tenant is not available: {name}'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    createRole: 'New Role',
    editPermission: 'Edit',
    roles: 'Your roles',
    switchRoles: 'Switch roles',
    tips: 'In some cases, using v-permission will have no effect. For example: Element-UI  el-tab or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Importance',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'Reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  example: {
    warning: 'Creating and editing pages cannot be cached by keep-alive because keep-alive\'s \'include\' currently does not support caching based on routes, so now it\'s cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or don\'t use keep-alive\'s \'include\' to cache all pages directly. See details'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name (default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name (default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading PDF.'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    showTagsView: 'Open Tags-View',
    showSidebarLogo: 'Sidebar Logo',
    fixedHeader: 'Fixed Header',
    sidebarTextTheme: 'Sidebar Text Theme',
    globalSetting: 'global',
    tenantSetting: 'tenant',
    userSetting: 'user',
    passwordSecurity: 'security',
    systemSetting: 'system',
    userAccount: 'user account',
    mailing: "mailing"
  },
  task: {
    title: 'task'
  },
  users: {
    queryFilter: 'filter:',
    filterString: 'filter',
    searchList: 'search',
    createUser: 'create',
    userName: 'user name',
    name: 'name',
    surname: 'nick name',
    email: 'email',
    phoneNumber: 'phone pumber',
    lockoutEnd: 'lockout',
    creationTime: 'creation time',
    operaActions: 'opera',
    updateUser: 'update',
    updateUserBy: 'update  {name}',
    otherOpera: 'other',
    lockUser: 'lock',
    deleteUser: 'delete',
    delNotRecoverData: 'Please note that the deletion is not recoverable!',
    whetherDeleteUser: 'Do you want to delete user {name}?',
    userHasBeenDeleted: 'User {name} has been deleted!',
    twoFactorEnabled: 'Two-factor',
    lockoutEnabled: 'Logon failure locks',
    createUserSuccess: 'User {name} added successfully!',
    updateUserSuccess: 'User {name} modify successfully!'
  },
  userProfile: {
    basic: 'basic',
    security: 'security',
    roles: 'role',
    roleList: 'roles',
    hasRoles: 'existing role',
    permission: 'permissions',
    password: 'password',
    confirmPassword: 'confirm password',
    pleaseInputName: 'input name',
    pleaseInputUserName: 'input username',
    pleaseInputSurname: 'input nick name',
    pleaseInputPhoneNumber: 'input phonenumber',
    pleaseInputEmail: 'input email',
    pleaseInputPassword: 'input password',
    pleaseConfirmPassword: 'confirm password'
  },
  roles: {
    refreshList: 'refresh',
    id: 'id',
    name: 'name',
    type: 'type',
    system: 'system',
    custom: 'custom',
    isDefault: 'default',
    isPublic: 'public',
    isPrivate: 'private',
    operaActions: 'opera',
    updateRole: 'update',
    deleteRole: 'delete',
    createRole: 'create',
    permission: 'permissions',
    otherOpera: 'other',
    setDefault: 'set default',
    unSetDefault: 'cancel default',
    delNotRecoverData: 'Please note that the deletion is not recoverable!',
    whetherDeleteRole: 'Do you want to delete the role {name}?',
    roleHasBeenDeleted: 'The role {name} has been deleted!',
    roleHasBeenSetDefault: '{name} is set to the default role!',
    createRoleSuccess: 'Role {name} added successfully!',
    pleaseInputRoleName: 'Please enter a role name',
    roleNameIsRequired: 'The role name cannot be empty!'
  },
  operaActions: 'opera',
  queryFilter: 'filter',
  filterString: 'filter',
  searchList: 'search',
  creationTime: 'creation time',
  successful: 'successful',
  pleaseInputBy: 'Please enter the {key}',
  pleaseSelectBy: 'Please select a {key}',
  none: 'none',
  questingDeleteByMessage: 'Whether to delete{message}?',
  delNotRecoverData: 'Please note that the deletion is not recoverable!',
  whetherDeleteData: 'Delete the selected record {name}?',
  dataHasBeenDeleted: 'The selected record {name} has been deleted!',
  fieldLengthMustBeRange: 'The field length must be between {min} and {Max}!',
  enabled: 'enabled',
  disbled: 'disbled',
  lastModificationTime: 'modify time',
  apiGateWay: {
    createGroup: 'create',
    updateGroup: 'update',
    updateGroupByApp: 'update  {name}',
    deleteGroup: 'delete',
    createGlobal: 'create',
    updateGlobal: 'update',
    updateGlobalByApp: 'update  {name}',
    deleteGlobal: 'delete',
    createRoute: 'create',
    updateRoute: 'update',
    updateRouteByApp: 'update  {name}',
    deleteRoute: 'delete',
    deleteRouteByName: 'delete  {name}',
    deleteRouteSuccess: 'Route {name} has been deleted!',
    groupName: 'group',
    pleaseInputGroupName: 'Please enter the routing group name',
    appId: 'appid',
    pleaseInputAppId: 'Please enter the appid',
    appName: 'appName',
    pleaseInputAppName: 'Please enter the appName',
    appIpAddress: 'ip address',
    description: 'description',
    isActive: 'actived',
    active: 'active',
    dnActive: 'disable',
    basicOptions: 'basic',
    routingForward: 'foeward',
    requestProcessing: 'request handler',
    httpOptions: 'http handler',
    rateLimitOptions: 'limit',
    authorization: 'security',
    qoSOptions: 'qos',
    loadBalancerOptions: 'load balancer',
    serviceDiscovery: 'discovery',
    baseUrl: 'baseUrl',
    downstreamScheme: 'downstream scheme',
    requestIdKey: 'request key',
    maxConnectionsPerServer: 'max connections',
    useProxy: 'proxy',
    useTracing: 'tracing',
    allowAutoRedirect: 'redirect',
    useCookieContainer: 'cookie',
    clientIdHeader: '客户端请求头',
    httpStatusCode: 'Http错误代码',
    quotaExceededMessage: '过载错误消息',
    rateLimitCounterPrefix: '速率限制器前缀',
    disableRateLimitHeaders: '禁用速率限制头',
    timeoutValue: '超时时间(ms)',
    durationOfBreak: '熔断时间(ms)',
    exceptionsAllowedBeforeBreaking: '允许的最大异常次数',
    loadBalancerType: '轮询方式',
    leastConnection: '总是空闲服务器',
    roundRobin: '服务器轮询',
    noLoadBalance: '发往首个服务器',
    loadBalancerKey: '轮询标识',
    loadBalancerExpiry: '到期时间',
    discoverType: '实例类型',
    discoverHost: '主机地址',
    discoverPort: '主机端口',
    discoverToken: '访问标识',
    configurationKey: '配置标识',
    pollingInterval: '轮询间隔',
    namespace: '命名空间',
    discoverScheme: '协议类型',
    downstreamHttpVersion: '下游服务版本',
    reRouteName: '路由名称',
    appIdHasRequired: '应用标识不能为空!',
    upstreamPathTemplate: '上游请求路径',
    upstreamHttpMethod: '上游请求方式',
    upstreamHost: '上游主机地址',
    downstreamHostAndPorts: '下游请求地址',
    downstreamPathTemplate: '下游请求路径',
    serviceName: '服务名称',
    serviceNamespace: '命名空间',
    addDownHost: '添加下游主机',
    priority: '优先级',
    downHostPortFormat: '输入格式: Ip地址:端口号',
    aggrefateKey: '聚合标识',
    downstreamHttpMethod: '下游请求方法',
    changeDownstreamPathTemplate: '下游路径声明转换',
    downstreamHeaderTransform: '添加下游响应标头',
    addHeadersToRequest: '添加请求标头转换',
    addClaimsToRequest: '添加请求声明转换',
    addQueriesToRequest: '添加查询参数转换',
    upstreamHeaderTransform: '添加上游请求标头',
    routeClaimsRequirement: '路由必要声明',
    delegatingHandlers: '委托处理程序',
    reRouteIsCaseSensitive: '忽略大小写',
    dangerousAcceptAnyServerCertificateValidator: '忽略SSL错误',
    enableRateLimiting: '启用流量控制',
    rateLimitCount: '最大请求数量',
    period: '速率限制时间',
    periodTimespan: '允许错开时间重试(s)',
    clientWhitelist: '客户端白名单',
    ipAllowedList: 'Ip白名单',
    ipBlockedList: 'Ip黑名单',
    authenticationProviderKey: '身份认证程序',
    allowedScopes: '允许认证范围',
    createAggregateRoute: '新建聚合',
    aggregateRouteName: '聚合名称',
    reRouteKeys: '路由标识列表',
    aggregateOptions: '聚合选项',
    routeKeysConfig: '路由配置',
    updateAggregateRoute: '编辑聚合',
    updateAggregateRouteByName: '编辑聚合  {name}',
    deleteAggregateRoute: '删除聚合',
    deleteAggregateRouteByName: '删除聚合  {name}',
    deleteAggregateRouteSuccess: '聚合路由 {name} 已删除!',
    createAggregateRouteKey: '新建聚合参数',
    deleteAggregateRouteConfig: '删除配置',
    deleteAggregateRouteConfigByKey: '删除路由配置  {key}',
    deleteAggregateRouteConfigSuccess: '路由配置 {key} 已删除!',
    createAggregateRouteConfigSuccess: '路由配置 {key} 已添加!',
    createAggregateRouteConfig: '新建路由配置',
    aggregateRouteKey: '路由标识',
    aggregateParameter: '聚合参数',
    aggregateJsonPath: 'Json路径'
  },
  identityServer: {
    otherOpera: '更多操作',
    enabled: '启用客户端',
    disbled: '停用客户端',
    clientStatus: '客户端状态',
    deleteClient: '删除客户端',
    updateClient: '编辑客户端',
    updateClientByName: '编辑客户端  {name}',
    deleteClientById: '是否要删除客户端: {id}',
    deleteClientSuccess: '客户端: {id} 已删除!',
    createClientSuccess: '客户端: {id} 已添加!',
    updateClientSuccess: '客户端: {id} 已修改!',
    clientClaim: '客户端声明',
    clientProperty: '客户端属性',
    clientSecret: '客户端密钥',
    clientPermission: '客户端权限',
    deleteSecret: '删除密钥',
    deleteSecretByType: '是否要删除客户端密钥: {type}',
    deleteSecretSuccess: '客户端密钥: {type} 已删除!',
    createSecretSuccess: '客户端密钥: {type} 已添加!',
    createSecret: '添加客户端密钥',
    deleteClaim: '删除声明',
    deleteClaimByType: '是否要删除客户端声明: {type}',
    deleteClaimSuccess: '客户端声明: {type} 已删除!',
    createClaimSuccess: '客户端声明: {type} 已添加!',
    createClaim: '添加客户端声明',
    deleteProperty: '删除属性',
    deleteClientPropertyByType: '是否要删除客户端属性: {key}',
    deleteClientPropertySuccess: '客户端属性: {key} 已删除!',
    createClientPropertySuccess: '客户端属性: {key} 已添加!',
    createClientProperty: '添加客户端属性',
    createClient: '添加客户端',
    clientId: '客户端标识',
    clientName: '客户端名称',
    description: '客户端说明',
    cloneClint: '克隆客户端',
    copyAllowedGrantType: '复制客户端授权类型',
    copyRedirectUri: '复制客户端重定向Uri',
    copyAllowedScope: '复制客户端作用域',
    copyClaim: '复制客户端声明',
    copyAllowedCorsOrigin: '复制客户端跨域来源',
    copyPostLogoutRedirectUri: '复制客户端注销重定向Uri',
    copyPropertie: '复制客户端属性',
    copyIdentityProviderRestriction: '复制身份提供程序限制',
    protocolType: '协议类型',
    requireClientSecret: '需要客户端密钥',
    requirePkce: '需要Pkce',
    allowPlainTextPkce: '允许纯文本Pkce',
    allowOfflineAccess: '允许离线访问',
    allowedScopes: '允许的作用域',
    redirectUris: '重定向Uri',
    allowedGrantTypes: '允许的授权类型',
    allowAccessTokensViaBrowser: '允许通过浏览器访问令牌',
    identityTokenLifetime: '身份令牌有效期(s)',
    accessTokenLifetime: '访问令牌有效期(s)',
    authorizationCodeLifetime: '授权码有效期(s)',
    absoluteRefreshTokenLifetime: '绝对刷新令牌有效期(s)',
    slidingRefreshTokenLifetime: '滚动刷新令牌有效期(s)',
    deviceCodeLifetime: '设备授权码有效期(s)',
    clientClaimsPrefix: '客户端声明前缀',
    basicOptions: '基本设置',
    frontChannelLogoutUri: '前端通道注销 Uri',
    frontChannelLogoutSessionRequired: '需要前端通道注销会话',
    backChannelLogoutUri: '后端通道退出 Uri',
    backChannelLogoutSessionRequired: '需要后端通道注销会话',
    enableLocalLogin: '启用本地登录',
    postLogoutRedirectUris: '注销重定向 Uri',
    identityProviderRestrictions: '身份提供程序限制',
    userSsoLifetime: '用户 SSO 生命周期',
    accessTokenType: '访问令牌类型',
    refreshTokenUsage: '刷新令牌使用情况',
    refreshTokenExpiration: '刷新令牌过期方式',
    allowedCorsOrigins: '允许跨域来源',
    updateAccessTokenClaimsOnRefresh: '刷新时更新访问令牌声明',
    includeJwtId: '包括 Jwt 标识',
    alwaysSendClientClaims: '始终发送客户端声明',
    alwaysIncludeUserClaimsInIdToken: '始终在标识令牌中包含用户声明',
    pairWiseSubjectSalt: '配对主体盐',
    requireConsent: '需要同意',
    allowRememberConsent: '允许记住同意',
    clientUri: '客户端 Uri',
    logoUri: '徽标 Uri',
    userCodeType: '用户代码类型',
    secretType: '密钥类型',
    secretValue: '密钥值',
    secretHashType: '哈希类型',
    hashOnlySharedSecret: '哈希类型仅适用于 SharedSecret 类型',
    secretDescription: '密钥说明',
    expiration: '过期日期',
    claimType: '声明类型',
    claimValue: '声明值',
    propertyKey: '属性名称',
    propertyValue: '属性值',
    createApiResource: '添加Api资源',
    updateApiResource: '编辑Api资源',
    updateApiResourceByName: '编辑Api资源  {name}',
    deleteApiResourceByName: '删除Api资源  {name}',
    createApiResourceSuccess: 'Api资源  {name} 已添加!',
    deleteApiResourceSuccess: 'Api资源  {name} 已删除!',
    updateApiResourceSuccess: 'Api资源  {name} 已修改!',
    createApiSecret: '添加Api密钥',
    deleteApiSecret: '删除Api密钥',
    deleteApiSecretByType: '删除Api密钥  {type}',
    createApiSecretSuccess: 'Api密钥  {type} 已添加!',
    deleteApiSecretSuccess: 'Api密钥  {type} 已删除!',
    apiResourceSecret: 'Api 密钥',
    createApiScope: '添加Api作用域',
    deleteApiScope: '删除Api作用域',
    deleteApiScopeByName: '删除Api作用域  {name}',
    createApiScopeSuccess: 'Api作用域  {name} 已添加!',
    deleteApiScopeSuccess: 'Api作用域  {name} 已删除!',
    apiResourceScope: 'Api 作用域',
    deleteApiResource: '删除资源',
    resourceName: '资源名称',
    resourceDisplayName: '显示名称',
    enabledResource: '启用资源',
    resourceStatus: '资源状态',
    resourceDescription: '资源说明',
    resourceUserClaims: '用户声明',
    apiScopeName: '名称',
    apiScopeDisplayName: '显示名称',
    apiScopeDescription: '描述',
    apiScopeRequired: '必须',
    apiScopeEmphasize: '强调',
    apiScopeShowInDiscoveryDocument: '在发现文档显示',
    createIdentityResource: '添加身份资源',
    updateIdentityResource: '编辑身份资源',
    identityResourceProperties: '资源属性',
    deleteIdentityResource: '删除资源',
    updateIdentityResourceByName: '编辑身份资源  {name}',
    deleteIdentityResourceByName: '删除身份资源  {name}',
    createIdentityResourceSuccess: '身份资源  {name} 已添加!',
    deleteIdentityResourceSuccess: '身份资源  {name} 已删除!',
    updateIdentityResourceSuccess: '身份资源  {name} 已修改!',
    identityResourceRequired: '必须',
    identityResourceEmphasize: '强调',
    identityResourceShowInDiscoveryDocument: '在发现文档显示',
    deleteIdentityPropertyByKey: '是否要删除身份资源属性: {key}',
    deleteIdentityPropertySuccess: '身份资源属性: {key} 已删除!',
    createIdentityPropertySuccess: '身份资源属性: {key} 已添加!',
    createIdentityProperty: '添加身份资源属性'
  },
  tenant: {
    createTenant: '创建租户',
    updateTenant: '编辑租户',
    deleteTenant: '删除租户',
    createTenantSuccess: '租户  {name} 已添加!',
    deleteTenantByName: '删除租户  {name}',
    deleteTenantSuccess: '租户  {name} 已删除!',
    tenantNameChanged: '租户名称  {name} 已变更!',
    id: '租户标识',
    name: '租户名称',
    changeTenantName: '变更租户名称',
    connectionOptions: '连接配置',
    adminEmailAddress: '管理员邮件',
    adminPassword: '管理员密码',
    connectionName: '连接名称',
    connectionString: '连接字符串',
    setTenantConnection: '设置连接',
    deleteConnection: '删除连接',
    setTenantConnectionSuccess: '租户连接  {name} 已添加!',
    deleteTenantConnectionName: '删除租户连接  {name}',
    deleteTenantConnectionSuccess: '租户连接  {name} 已删除!'
  },
  global: {
    name: '名称',
    displayName: '显示名称',
    description: '说明',
    operaActions: '操作方法',
    queryFilter: '查询过滤',
    filterString: '过滤字符',
    searchList: '查询列表',
    creationTime: '创建时间',
    successful: '提交成功',
    pleaseInputBy: '请输入{key}',
    pleaseSelectBy: '请选择{key}',
    none: '未定义',
    charLengthRange: '长度在 {min} 到 {max} 个字符!',
    questingDeleteByMessage: '是否要删除{message}?',
    delNotRecoverData: '请注意,删除后不可恢复!',
    whetherDeleteData: '是否删除选择的记录 {name} ?',
    dataHasBeenDeleted: '选定的记录 {name} 已删除!',
    fieldLengthMustBeRange: '字段的长度必须在{min}到{max}之间!',
    enabled: '启用',
    disbled: '停用',
    status: '状态',
    lastModificationTime: '修改时间',
    otherOpera: '更多操作',
    cancel: '取 消',
    confirm: '确 定',
    correctEmailAddress: '正确的邮件地址',
    correctPhoneNumber: '正确的手机号码',
    operatingFast: '您的操作过快,请稍后再试!'
  },
  messages: {
    noNotifications: '没有通知',
    noMessages: '没有消息'
  }
}
