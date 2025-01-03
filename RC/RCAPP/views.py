from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
import json
from .models import *

# Create your views here.
def terms(request):
    return render(request, 'terms.html')

def register(request):
    return render(request, 'register.html')

def index(request):
    return render(request, "index.html")

def login(request):
    return render(request, "login.html")

def register(request):
    return render(request, "register.html")

def info(request):
    return render(request, "infopage.html")

def workspace(request, PID):
    ## Find project and find it's own mindmaps
    project = Project.objects.filter(id=PID).first()

    # If no project is found, redirect to index page
    if not project:
        return redirect('index')
    
    mindmaps = Mindmap.objects.filter(research=project)

    return render(request, "workspace.html", {
        "project_info": project,
        "mindmaps": mindmaps,
    })


@csrf_exempt
def save_mindmap(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body)
            name = body.get("name")
            data = body.get("data")

            if not name or not data:
                return JsonResponse({"error": "Name and data are required"}, status=400)

            try:
                project = Project.objects.get(project_name="sda")
            except Project.DoesNotExist:
                return JsonResponse({"error": "Project not found"}, status=404)

            mindmap, created = Mindmap.objects.update_or_create(
                name=name,
                defaults={"data": data, "research": project}
            )
            return JsonResponse({"message": "Mind map saved", "created": created, "mm_pk": mindmap.pk})

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)


@csrf_exempt
def load_mindmap(request, MN):
    ## add filtering with research id later

    try:
        mindmap = Mindmap.objects.all().get(name=MN)
        return JsonResponse({"name": mindmap.name, "data": mindmap.data})
    except Mindmap.DoesNotExist:
        return JsonResponse({"error": "Mind map not found"}, status=404)
        
def list_mindmaps(request):
    mindmaps = Mindmap.objects.all().values("name")  # Fetch all mind map names
    return JsonResponse({"mindmaps": list(mindmaps)})

@csrf_exempt
def delete_mindmap(request, PNAME):
    try:
        mindmap = Mindmap.objects.get(name=PNAME)
        mindmap.delete()
        return JsonResponse({"message": f"Mind map '{PNAME}' deleted successfully."})
    except Mindmap.DoesNotExist:
        return JsonResponse({"error": "Mind map not found."}, status=404)

@csrf_exempt
def save_chart(request, PID):
    try:
        data = json.loads(request.body)
        chart_name = data.get('chart_name')
        chart_data = data.get('chart_data')

        if not chart_name or not chart_data:
            return JsonResponse({"error": "Chart name and data are required!"}, status=400)

        try:
            research = Project.objects.get(id=PID)
        except Project.DoesNotExist:
            return JsonResponse({"error": f"Project with ID {PID} does not exist."}, status=404)

        new_chart = Chart(research=research, name=chart_name, data=chart_data)
        new_chart.save()        

        return JsonResponse({"message": f"Chart '{chart_name}' is saved!"})
    
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON data."}, status=400)
    except Exception as e:
        return JsonResponse({"error": f"An error occurred: {str(e)}"}, status=500)