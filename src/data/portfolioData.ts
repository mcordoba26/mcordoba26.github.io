import { Project, SkillCategory, CodeSnippet } from '../types';

export const PERSONAL_INFO = {
  name: 'Meyel Córdoba',
  role: 'Desarrollador Full Stack & Programador Políglota',
  status: 'Disponible para proyectos y desarrollo freelance',
  isAvailable: true,
  email: 'm26cordoba@gmail.com',
  github: 'https://github.com/mcordoba26',
  githubUsername: 'mcordoba26',
  location: 'Remoto / Global',
  bio: 'Especialista en la creación de aplicaciones web Full Stack de alto impacto, arquitecturas escalables y scripting de sistemas. Dominio versátil de múltiples lenguajes: desde JavaScript, TypeScript y Python hasta C#, C++, Java y Lua.',
  tagline: 'Construyendo experiencias web modernas, código limpio y soluciones técnicas de alto rendimiento.',
};

export const STATS = [
  { label: 'Lenguajes Dominados', value: '7+', desc: 'JS, TS, Python, Java, C#, C++, Lua' },
  { label: 'Enfoque de Arquitectura', value: 'Full Stack', desc: 'Frontend moderno & backend robusto' },
  { label: 'Calidad de Código', value: '100%', desc: 'Tipado estricto, buenas prácticas' },
  { label: 'Disponibilidad', value: 'Activa', desc: 'Proyectos a medida y consultoría' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & Web UI',
    iconName: 'Layout',
    description: 'Interfaces interactivas, minimalistas y responsivas con rendimiento óptimo.',
    skills: [
      { name: 'TypeScript', level: 'Avanzado', iconKey: 'ts', description: 'Tipado estricto, interfaces y desarrollo modular' },
      { name: 'JavaScript (ES6+)', level: 'Avanzado', iconKey: 'js', description: 'Manipulación asíncrona, DOM y APIs nativas' },
      { name: 'React', level: 'Avanzado', iconKey: 'react', description: 'Componentes modernos, Hooks y gestión de estado' },
      { name: 'Tailwind CSS', level: 'Avanzado', iconKey: 'tailwind', description: 'Diseño utilitario, modo oscuro y animaciones' },
      { name: 'HTML5 & CSS3 Moderno', level: 'Avanzado', iconKey: 'html', description: 'Semántica web, Flexbox, Grid y accesibilidad' },
    ],
  },
  {
    title: 'Backend & APIs',
    iconName: 'Server',
    description: 'Servicios en la nube, APIs RESTful, autenticación y procesamiento de datos.',
    skills: [
      { name: 'Python', level: 'Avanzado', iconKey: 'python', description: 'FastAPI, scripting, automatizaciones y lógica de negocio' },
      { name: 'Node.js & Express', level: 'Avanzado', iconKey: 'node', description: 'Microservicios, APIs REST y websockets en tiempo real' },
      { name: 'Java', level: 'Intermedio - Avanzado', iconKey: 'java', description: 'Programación orientada a objetos y patrones de diseño' },
      { name: 'Bases de Datos', level: 'Avanzado', iconKey: 'db', description: 'SQL (PostgreSQL, MySQL) y NoSQL (MongoDB)' },
    ],
  },
  {
    title: 'Sistemas, Scripting & Juegos',
    iconName: 'Cpu',
    description: 'Desarrollo de bajo nivel, scripts de servidores y lógica de videojuegos.',
    skills: [
      { name: 'Lua', level: 'Avanzado', iconKey: 'lua', description: 'Scripts personalizados, FiveM / Roblox y automatizaciones' },
      { name: 'C#', level: 'Avanzado', iconKey: 'csharp', description: 'Ecosistema .NET, Unity y aplicaciones de escritorio' },
      { name: 'C++', level: 'Intermedio - Avanzado', iconKey: 'cpp', description: 'Control de memoria, algoritmos y código de alto rendimiento' },
      { name: 'Git & GitHub', level: 'Avanzado', iconKey: 'git', description: 'Control de versiones, flujos de trabajo colaborativos y CI/CD' },
    ],
  },
];

// Initial projects showcasing capabilities, ready for Meyel to customize with his real projects
export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'voidcloud-platform',
    title: 'VoidCloud Platform',
    description: 'Plataforma web Full Stack para monitoreo y administración de servidores en tiempo real con interfaz oscura minimalista.',
    longDescription: 'Aplicación integral con panel de control en tiempo real, gestión de métricas de rendimiento, endpoints RESTful protegidos y diseño de ultra-bajo consumo de recursos.',
    category: 'Full Stack',
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'WebSockets'],
    stars: 12,
    featured: true,
    githubUrl: 'https://github.com/mcordoba26',
    liveUrl: '#',
    status: 'Completado',
  },
  {
    id: 'nexus-lua-engine',
    title: 'Nexus Lua Script Engine',
    description: 'Framework modular de scripts en Lua con bindings en C++ para servidores multijugador y automatización de eventos.',
    longDescription: 'Módulo optimizado para ejecutar tareas concurrentes sin caídas de framerate, sincronización de base de datos asíncrona y sistema de eventos por suscripción.',
    category: 'Systems / Scripting',
    tags: ['Lua', 'C++', 'FiveM Scripts', 'Performance'],
    stars: 28,
    featured: true,
    githubUrl: 'https://github.com/mcordoba26',
    liveUrl: '#',
    status: 'Open Source',
  },
  {
    id: 'hyperscale-api',
    title: 'HyperScale API Gateway',
    description: 'Microservicio backend en Python para enrutamiento inteligente, rate limiting y caching en memoria.',
    longDescription: 'Construido para soportar alto tráfico con tiempos de respuesta inferiores a 15ms. Incluye documentación OpenAPI autogenerada y autenticación JWT.',
    category: 'Backend',
    tags: ['Python', 'FastAPI', 'Redis', 'Docker'],
    stars: 19,
    featured: false,
    githubUrl: 'https://github.com/mcordoba26',
    liveUrl: '#',
    status: 'Producción',
  },
  {
    id: 'devsuite-cli',
    title: 'DevSuite C# Toolkit',
    description: 'Herramienta de consola y automatización desarrollada en C# para optimizar flujos de trabajo de desarrollo web y assets.',
    longDescription: 'Utilidad multiplataforma .NET para compilar, auditar dependencias y sincronizar entornos de despliegue con un solo comando.',
    category: 'Systems / Scripting',
    tags: ['C#', '.NET', 'CLI', 'Automation'],
    stars: 8,
    featured: false,
    githubUrl: 'https://github.com/mcordoba26',
    liveUrl: '#',
    status: 'Completado',
  },
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    language: 'typescript',
    displayName: 'TypeScript',
    extension: 'server.ts',
    code: `// API Endpoint con tipado seguro
import { Request, Response } from 'express';

interface ProjectRequest {
  title: string;
  technologies: string[];
  isProductionReady: boolean;
}

export async function deployService(req: Request<{}, {}, ProjectRequest>, res: Response) {
  const { title, technologies } = req.body;
  
  console.log(\`⚡ Desplegando \${title} con stack: \${technologies.join(', ')}\`);
  return res.status(200).json({
    status: 'success',
    deployedBy: 'Meyel Córdoba',
    timestamp: Date.now()
  });
}`,
    output: `⚡ Desplegando VoidCloud Platform con stack: TypeScript, React, Node.js\n✔ 200 OK — Despliegue completado con éxito.`,
  },
  {
    language: 'python',
    displayName: 'Python',
    extension: 'api.py',
    code: `# Microservicio asíncrono con FastAPI
from fastapi import FastAPI, Depends
from pydantic import BaseModel

app = FastAPI(title="Meyel Services")

class Developer(BaseModel):
    name: str = "Meyel Córdoba"
    skills: list[str] = ["JS", "TS", "Python", "C#", "C++", "Lua", "Java"]

@app.get("/api/profile")
async def get_developer_profile():
    dev = Developer()
    return {"developer": dev.name, "languages_count": len(dev.skills), "status": "Ready to build"}`,
    output: `{"developer": "Meyel Córdoba", "languages_count": 7, "status": "Ready to build"}`,
  },
  {
    language: 'lua',
    displayName: 'Lua',
    extension: 'engine.lua',
    code: `-- Script de eventos y optimización
local MeyelEngine = {}
MeyelEngine.__index = MeyelEngine

function MeyelEngine.new(serverName)
    local self = setmetatable({}, MeyelEngine)
    self.server = serverName or "VoidHost"
    self.active = true
    return self
end

function MeyelEngine:TriggerEvent(eventName, payload)
    print(string.format("[Lua] Evento ejecutado: %s en %s", eventName, self.server))
    return true
end

local engine = MeyelEngine.new("MeyelServer")
engine:TriggerEvent("SYSTEM_INIT", { ping = 14 })`,
    output: `[Lua] Evento ejecutado: SYSTEM_INIT en MeyelServer\n✔ Event listener online [14ms]`,
  },
  {
    language: 'cpp',
    displayName: 'C++',
    extension: 'compute.cpp',
    code: `// Procesamiento de alto rendimiento en C++
#include <iostream>
#include <vector>
#include <numeric>

int main() {
    std::vector<std::string> stack = {"TypeScript", "JavaScript", "Python", "C#", "C++", "Java", "Lua"};
    std::cout << ">> Desarrollador: Meyel Córdoba" << std::endl;
    std::cout << ">> Lenguajes cargados: " << stack.size() << std::endl;
    for(const auto& tech : stack) {
        std::cout << " - " << tech << std::endl;
    }
    return 0;
}`,
    output: `>> Desarrollador: Meyel Córdoba\n>> Lenguajes cargados: 7\n - TypeScript\n - JavaScript\n - Python\n - C#\n - C++\n - Java\n - Lua`,
  },
  {
    language: 'csharp',
    displayName: 'C#',
    extension: 'Worker.cs',
    code: `// Tarea concurrente en C# .NET
using System;
using System.Threading.Tasks;

public class MeyelDev {
    public static async Task Main() {
        Console.WriteLine("Iniciando pipeline de construcción...");
        await Task.Delay(100);
        Console.WriteLine("✔ Arquitectura compilada sin advertencias.");
    }
}`,
    output: `Iniciando pipeline de construcción...\n✔ Arquitectura compilada sin advertencias.`,
  },
  {
    language: 'java',
    displayName: 'Java',
    extension: 'Application.java',
    code: `// Servicio orientado a objetos en Java
public class Application {
    public static void main(String[] args) {
        String developer = "Meyel Córdoba";
        System.out.println("Sistema Java iniciado por: " + developer);
    }
}`,
    output: `Sistema Java iniciado por: Meyel Córdoba\n✔ JVM Process exited with code 0.`,
  },
];
