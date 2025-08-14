import React, { useEffect, useState } from 'react'
import api from './services/api'

const STATUS = ['pendente', 'em_andamento', 'concluida']

export default function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  const fetchTasks = async () => {
    const response = await api.get('/tasks', {
      params: statusFilter ? { status: statusFilter } : {}
    })
    setTasks(response.data)
  }

  useEffect(() => {
    fetchTasks()
  }, [statusFilter])

  const createTask = async (e) => {
    e.preventDefault()
    await api.post('/tasks', { title, description })
    setTitle('')
    setDescription('')
    fetchTasks()
  }

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`)
    fetchTasks()
  }

  const updateStatus = async (id, newStatus) => {
    await api.put(`/tasks/${id}/status`, { status: newStatus })
    fetchTasks()
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Gerenciador de Tarefas</h1>

      <form onSubmit={createTask}>
        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Criar Tarefa</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <label>Filtrar por status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Todos</option>
          {STATUS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <ul style={{ marginTop: '20px' }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            <strong>{task.title}</strong> — {task.description} —{' '}
            <em>{task.status}</em>
            <div>
              <select
                value={task.status}
                onChange={(e) => updateStatus(task.id, e.target.value)}
              >
                {STATUS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <button onClick={() => deleteTask(task.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
