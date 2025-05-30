export enum PenlinkReservedField {
    ADDRESSES = 'addresses',
    WORKPLACES = 'workplaces',
    SOCIAL_PROFILES = 'socialProfiles',
    NETWORK_POSTS = 'networkPosts',
    SCHOOLS = 'schools',
    HEIMDALL_FIELDS = 'heimdall_fields',

    HISTORICO_FUNCIONAL = 'historicoFuncional',
    ENDERECO = 'endereco',
    PARTICIPACAO_SOCIETARIA_RF = 'participacaoSocietariaRF',
    PARTICIPACAO_SOCIETARIA_UNICO = 'participacaoSocietariaUnico',
    RELACIONAMENTOS = 'relacionamentos',
    USER_ID = 'userId',
    ESTABILIDADE_EMPREGO = 'estabilidadeEmprego',
    IMOVEIS = 'imoveis',
    CNJ_CNIA = 'cnjCnia',
}

export class PenlinkReservedFieldHelper {
    static list(): string[] {
        return Object.values(PenlinkReservedField);
    }

    static getValue(code: string): PenlinkReservedField | null {
        if (Object.values(PenlinkReservedField).includes(code as PenlinkReservedField)) {
            return code as PenlinkReservedField;
        }
        return null;
    }
}