package br.com.gestao_tarefas.service;

import br.com.gestao_tarefas.dto.TaskDTO;
import br.com.gestao_tarefas.model.Task;
import br.com.gestao_tarefas.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public Task create(TaskDTO dto) {
        Task task = Task.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .status(Task.Status.PENDENTE)
                .createdAt(LocalDateTime.now())
                .build();
        return repository.save(task);
    }

    public List<Task> findAll(Task.Status status) {
        return (status == null) ? repository.findAll() : repository.findByStatus(status);
    }

    public Task updateStatus(Long id, Task.Status newStatus) {
        Task task = repository.findById(id).orElseThrow();
        task.setStatus(newStatus);
        return repository.save(task);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
