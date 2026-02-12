export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="card card-hover group">
      <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center text-xl mb-4">
        {icon}
      </div>
      <h3 className="text-h3 font-semibold text-primary mb-2 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-body-sm text-secondary">{description}</p>
    </div>
  )
}
