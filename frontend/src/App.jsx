import React, { useEffect, useState } from 'react'
import api from './services/api'
import './App.css'

const STATUS = ['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA']

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
    <div className="app-container">
      <h1 className="app-heading">📝 Gerenciador de Tarefas</h1>

      <form onSubmit={createTask} className="app-form">
        <input
          className="app-input"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="app-input"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" className="button-primary">
          Criar Tarefa
        </button>
      </form>

      <div className="filter-section">
        <label style={{ marginRight: 10 }}>Filtrar por status:</label>
        <select
          className="select-input"
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

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div>
              <strong>{task.title}</strong> — {task.description}
              <br />
              <span className="badge">{task.status}</span>
            </div>
            <div className="task-actions">
              <select
                className="select-input"
                value={task.status}
                onChange={(e) => updateStatus(task.id, e.target.value)}
              >
                {STATUS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <button
                onClick={() => deleteTask(task.id)}
                className="button-danger"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
