package br.com.gestao_tarefas.dto;

import br.com.gestao_tarefas.model.Task;
import lombok.Data;

@Data
public class TaskDTO {
    private String title;
    private String description;
    private Task.Status status;
}

