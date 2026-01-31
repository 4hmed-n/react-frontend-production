#!/usr/bin/env python3
"""
Generate a professional resume PDF with portfolio color scheme
Colors: Dark theme with blue (#3b82f6), purple (#a855f7), cyan accents
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor

# Portfolio color scheme
DARK_BG = HexColor('#050510')
BLUE = HexColor('#3b82f6')
PURPLE = HexColor('#a855f7')
CYAN = HexColor('#06b6d4')
WHITE = HexColor('#ffffff')
GRAY_LIGHT = HexColor('#e5e7eb')
GRAY_MID = HexColor('#9ca3af')
GRAY_DARK = HexColor('#374151')

def create_resume():
    pdf_path = 'public/resume.pdf'
    c = canvas.Canvas(pdf_path, pagesize=letter)
    width, height = letter
    
    # Dark background
    c.setFillColor(DARK_BG)
    c.rect(0, 0, width, height, fill=True, stroke=False)
    
    # Header section with gradient effect (simulated with rectangles)
    header_height = 2.5 * inch
    c.setFillColor(HexColor('#0f172a'))
    c.rect(0, height - header_height, width, header_height, fill=True, stroke=False)
    
    # Blue accent bar at top
    c.setFillColor(BLUE)
    c.rect(0, height - 0.3*inch, width, 0.3*inch, fill=True, stroke=False)
    
    # Name
    c.setFillColor(WHITE)
    c.setFont('Helvetica-Bold', 32)
    c.drawString(0.75*inch, height - 1.2*inch, 'MUHAMMAD AHMED')
    
    # Title with blue accent
    c.setFillColor(BLUE)
    c.setFont('Helvetica', 14)
    c.drawString(0.75*inch, height - 1.5*inch, 'Full-Stack Developer & Data Science Engineer')
    
    # Contact info with cyan accents
    y_contact = height - 1.9*inch
    c.setFillColor(GRAY_LIGHT)
    c.setFont('Helvetica', 10)
    
    c.setFillColor(CYAN)
    c.drawString(0.75*inch, y_contact, '📧')
    c.setFillColor(GRAY_LIGHT)
    c.drawString(0.95*inch, y_contact, 'ahmednuman3044@gmail.com')
    
    c.setFillColor(CYAN)
    c.drawString(3.2*inch, y_contact, '📍')
    c.setFillColor(GRAY_LIGHT)
    c.drawString(3.4*inch, y_contact, 'RYK, Punjab, Pakistan')
    
    c.setFillColor(CYAN)
    c.drawString(5.5*inch, y_contact, '🔗')
    c.setFillColor(GRAY_LIGHT)
    c.drawString(5.7*inch, y_contact, 'github.com/4hmed-n')
    
    # Professional Summary section
    y = height - 2.7*inch
    c.setFillColor(BLUE)
    c.setFont('Helvetica-Bold', 12)
    c.drawString(0.75*inch, y, 'PROFESSIONAL SUMMARY')
    
    c.setFillColor(PURPLE)
    c.setLineWidth(2)
    c.line(0.75*inch, y - 0.05*inch, 2.5*inch, y - 0.05*inch)
    
    y -= 0.3*inch
    c.setFillColor(GRAY_LIGHT)
    c.setFont('Helvetica', 10)
    summary = [
        "Passionate Full-Stack Developer and Data Science enthusiast with expertise in building",
        "intelligent web applications. Proficient in Python, Machine Learning, React, and modern",
        "frameworks. Committed to solving complex problems and delivering impactful solutions."
    ]
    for line in summary:
        c.drawString(0.75*inch, y, line)
        y -= 0.2*inch
    
    # Technical Skills section
    y -= 0.3*inch
    c.setFillColor(BLUE)
    c.setFont('Helvetica-Bold', 12)
    c.drawString(0.75*inch, y, 'TECHNICAL SKILLS')
    
    c.setFillColor(PURPLE)
    c.line(0.75*inch, y - 0.05*inch, 2.3*inch, y - 0.05*inch)
    
    y -= 0.3*inch
    skills = [
        ('Languages:', 'Python, JavaScript, C++, C#, SQL'),
        ('Web Development:', 'React, React Native, Node.js, Express.js, FastAPI, HTML5, CSS3, Tailwind'),
        ('Data Science/ML:', 'Machine Learning, AI, Data Science, Computer Vision, Pandas, NumPy'),
        ('Databases:', 'MongoDB, SQLite, Firebase'),
        ('DevOps & Tools:', 'Docker, Git/GitHub, Postman, n8n, Expo')
    ]
    
    c.setFont('Helvetica-Bold', 10)
    c.setFillColor(CYAN)
    for category, items in skills:
        c.drawString(0.75*inch, y, category)
        c.setFont('Helvetica', 10)
        c.setFillColor(GRAY_LIGHT)
        c.drawString(1.8*inch, y, items)
        c.setFont('Helvetica-Bold', 10)
        c.setFillColor(CYAN)
        y -= 0.25*inch
    
    # Projects section
    y -= 0.2*inch
    c.setFillColor(BLUE)
    c.setFont('Helvetica-Bold', 12)
    c.drawString(0.75*inch, y, 'KEY PROJECTS')
    
    c.setFillColor(PURPLE)
    c.line(0.75*inch, y - 0.05*inch, 2.0*inch, y - 0.05*inch)
    
    y -= 0.3*inch
    
    # Project 1
    c.setFillColor(CYAN)
    c.setFont('Helvetica-Bold', 11)
    c.drawString(0.75*inch, y, '• Intelligent Web Applications')
    y -= 0.2*inch
    c.setFillColor(GRAY_LIGHT)
    c.setFont('Helvetica', 9)
    c.drawString(0.95*inch, y, 'Built full-stack applications combining React frontends with ML-powered backends')
    y -= 0.15*inch
    c.drawString(0.95*inch, y, 'Implemented data-driven features using Python, FastAPI, and MongoDB')
    y -= 0.3*inch
    
    # Project 2
    c.setFillColor(CYAN)
    c.setFont('Helvetica-Bold', 11)
    c.drawString(0.75*inch, y, '• Data Science Solutions')
    y -= 0.2*inch
    c.setFillColor(GRAY_LIGHT)
    c.setFont('Helvetica', 9)
    c.drawString(0.95*inch, y, 'Developed ML models for data analysis and predictive analytics')
    y -= 0.15*inch
    c.drawString(0.95*inch, y, 'Utilized computer vision and AI techniques for real-world problem solving')
    y -= 0.3*inch
    
    # Project 3
    c.setFillColor(CYAN)
    c.setFont('Helvetica-Bold', 11)
    c.drawString(0.75*inch, y, '• Modern Portfolio Website')
    y -= 0.2*inch
    c.setFillColor(GRAY_LIGHT)
    c.setFont('Helvetica', 9)
    c.drawString(0.95*inch, y, 'Created interactive portfolio with React, Vite, and Tailwind CSS')
    y -= 0.15*inch
    c.drawString(0.95*inch, y, 'Integrated particle effects, animations, and responsive design')
    y -= 0.3*inch
    
    # Education section
    y -= 0.2*inch
    c.setFillColor(BLUE)
    c.setFont('Helvetica-Bold', 12)
    c.drawString(0.75*inch, y, 'EDUCATION & INTERESTS')
    
    c.setFillColor(PURPLE)
    c.line(0.75*inch, y - 0.05*inch, 2.8*inch, y - 0.05*inch)
    
    y -= 0.3*inch
    c.setFillColor(GRAY_LIGHT)
    c.setFont('Helvetica', 10)
    education_items = [
        'Computer Science & Software Engineering Focus',
        'Continuous learner in ML/AI, Cloud Technologies, and Modern Web Development',
        'Active contributor to open-source projects'
    ]
    for item in education_items:
        c.drawString(0.95*inch, y, f'• {item}')
        y -= 0.2*inch
    
    # Footer with accent
    c.setFillColor(BLUE)
    c.rect(0, 0, width, 0.15*inch, fill=True, stroke=False)
    
    c.setFillColor(GRAY_LIGHT)
    c.setFont('Helvetica', 8)
    footer_text = 'Muhammad Ahmed | Portfolio: react-frontend-production.vercel.app'
    text_width = c.stringWidth(footer_text, 'Helvetica', 8)
    c.drawString((width - text_width) / 2, 0.05*inch, footer_text)
    
    c.save()
    print(f'✅ Resume generated successfully: {pdf_path}')
    print(f'📄 Color scheme: Dark theme with Blue (#3b82f6), Purple (#a855f7), Cyan (#06b6d4) accents')

if __name__ == '__main__':
    create_resume()
