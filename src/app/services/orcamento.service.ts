import { Injectable } from '@angular/core';
export interface Orcamento {
    id: number;
    valorDiaria: number;
    dias: number;
    valorTotal: number;
    dataHora?: string;
}
@Injectable({
    providedIn: 'root'
})
export class OrcamentoService {
    private STORAGE_KEY = 'orcamentos_salvos';
    private orcamentoAtual: Orcamento | null = null;
    setOrcamentoAtual(valorDiaria: number, dias: number) {
        this.orcamentoAtual = {
            id: Date.now(),
            valorDiaria,
            dias,
            valorTotal: valorDiaria * dias
        };
    }
    getOrcamentoAtual(): Orcamento | null {
        return this.orcamentoAtual;
    }
    getOrcamentos(): Orcamento[] {
        const dados = localStorage.getItem(this.STORAGE_KEY);
        return dados ? JSON.parse(dados) : [];
    }
    salvarOrcamentoAtual(): void {
        if (!this.orcamentoAtual) return;
        const orcamentos = this.getOrcamentos();
        const novoItem = {
            ...this.orcamentoAtual,
            dataHora: new Date().toLocaleString('pt-BR')
        };
        orcamentos.push(novoItem);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(orcamentos));
    }
    excluirOrcamento(id: number): Orcamento[] {
        let orcamentos = this.getOrcamentos();
        orcamentos = orcamentos.filter(o => o.id !== id);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(orcamentos));
        return orcamentos;
    }
}